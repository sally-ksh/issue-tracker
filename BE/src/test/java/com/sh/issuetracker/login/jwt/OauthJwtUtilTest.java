package com.sh.issuetracker.login.jwt;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.sh.issuetracker.login.oauth.user.Role;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Date;

class OauthJwtUtilTest {

	@Test
	@DisplayName("만료시간이 지난 AccessToken은 예외처리 된다.")
	void accessToken_expired_exception() {
		Algorithm algorithm = Algorithm.HMAC256("secret-key");
		String access = JWT.create()
			.withIssuer("sally")
			.withClaim("email", "email@emila.com")
			.withClaim("picture", "https//image.com")
			.withClaim("role", Role.USER.text())
			.withClaim("jti", "sally" + "email@emila.com")   // JWT 용 식별자 (unique)
			.withExpiresAt(new Date(System.currentTimeMillis() + 1000))  // TODO 만료기간 (10분 : 10*60*1000)
			.sign(algorithm);

		try {
			for (int i = 0; i < 2; i++) {
				Thread.sleep(2000);
			}

			DecodedJWT decodeAccess = JWT.decode(access);
			JWTVerifier accessVerify = JWT.require(algorithm)
				.withIssuer(decodeAccess.getIssuer())
				.build();

			assertThatThrownBy(() -> accessVerify.verify(access))
				.isInstanceOf(TokenExpiredException.class);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	@Test
	@DisplayName("accessToken으로부터 만들어진 token은 RefreshToken을 조회할 수 있다.")
	void accessToken_find_refreshToken() {
		Algorithm algorithm = Algorithm.HMAC256("secret-key");
		String access = JWT.create()
			.withIssuer("sally")
			.withClaim("email", "email@emila.com")
			.withClaim("picture", "https//image.com")
			.withClaim("role", Role.USER.text())
			.withClaim("jti", "sally" + "email@emila.com")
			.withExpiresAt(new Date(System.currentTimeMillis() + 1000))
			.sign(algorithm);

		DecodedJWT decodeAccess = JWT.decode(access);
		String refresh_secret_key = "REFRESH";  // 만료기간은 DB 별도 컬럼에 저장
		Algorithm algorithmOfRefresh = Algorithm.HMAC256(decodeAccess.getId() + refresh_secret_key);

		String expected = JWT.create()
			.withIssuer("sally")
			.withClaim("email", "email@emila.com")
			.withClaim("role", Role.USER.text())
			.sign(algorithmOfRefresh);

		try {
			String actual = JWT.create()
				.withIssuer(decodeAccess.getIssuer())
				.withClaim("email", decodeAccess.getClaim("email").asString())
				.withClaim("role", decodeAccess.getClaim("role").asString())
				.sign(algorithmOfRefresh);

			assertThat(actual).isEqualTo(expected);

		} catch (JWTVerificationException exception) {
			System.out.println("exception > " + exception.getMessage());
		}
	}

}
