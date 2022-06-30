package com.sh.issuetracker.login.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.sh.issuetracker.login.oauth.OauthToken;
import com.sh.issuetracker.login.oauth.dto.Response;
import com.sh.issuetracker.login.oauth.user.AuthUser;
import com.sh.issuetracker.login.oauth.user.Role;

import java.util.Date;

public class OauthJwtUtil {
	public static final String ACCESS_SECRET_KEY = "access-secret-key-2022";
	public static final String REFRESH_SECRET_KEY = "refresh-secret-key-2022";
	public static final String EMAIL = "email";
	public static final String PROJECT = "project";
	public static final String PICTURE = "picture";
	public static final String ROLE = "role";
	public static final String JWT_UNIQUE_IDENTIFIER = "jti";
	public static final int EXPIRED_DATE_OF_ACCESS_TOKEN = (10 * 60 * 1000);   // 10min
	public static final int EXPIRED_DATE_OF_REFRESH_TOKEN = (30 * 24 * 60 * 60 * 1000);  // 1month - DB 테이블

	private static Algorithm getAlgorithm(String secretKey) {
		return Algorithm.HMAC256(secretKey);
	}

	public static JwtToken getJwtTokens(Response.UserInfo userInfo, Role role) {
		return new JwtToken(
			getAccessToken(userInfo, role),
			getRefreshToken(userInfo, role));
	}

	private static String getAccessToken(Response.UserInfo userInfo, Role role) {
		return JWT.create()
			.withIssuer(userInfo.getName())
			.withClaim(EMAIL, userInfo.getEmail())
			.withClaim(PICTURE, userInfo.getPicture())
			.withClaim(ROLE, role.text())
			.withClaim(JWT_UNIQUE_IDENTIFIER, userInfo.getName() + userInfo.getEmail())
			.withExpiresAt(new Date(System.currentTimeMillis() + EXPIRED_DATE_OF_ACCESS_TOKEN))
			.sign(getAlgorithm(ACCESS_SECRET_KEY));
	}

	private static String getAccessToken(String accessToken) {
		DecodedJWT decodeAccess = toDecode(accessToken);
		return JWT.create()
			.withIssuer(decodeAccess.getIssuer())
			.withClaim(EMAIL, decodeAccess.getClaim(EMAIL).asString())
			.withClaim(PICTURE, decodeAccess.getClaim(PICTURE).asString())
			// .withClaim(PROJECT, userInfo.getProject())
			.withClaim(ROLE, decodeAccess.getClaim(ROLE).asString())
			.withClaim(JWT_UNIQUE_IDENTIFIER, decodeAccess.getClaim(JWT_UNIQUE_IDENTIFIER).asString())
			.withExpiresAt(new Date(System.currentTimeMillis() + EXPIRED_DATE_OF_ACCESS_TOKEN))
			.sign(getAlgorithm(ACCESS_SECRET_KEY));
	}

	private static String getRefreshToken(Response.UserInfo userInfo, Role role) {
		String refreshTokenKey = userInfo.getName() + userInfo.getEmail() + REFRESH_SECRET_KEY;
		return JWT.create()
			.withIssuer(userInfo.getName())
			.withClaim(EMAIL, userInfo.getEmail())
			.withClaim(ROLE, role.text())
			.sign(getAlgorithm(refreshTokenKey));
	}

	public static String getRefreshToken(String accessToken) {
		DecodedJWT decodeAccess = toDecode(accessToken);
		return JWT.create()
			.withIssuer(decodeAccess.getIssuer())
			.withClaim(EMAIL, decodeAccess.getClaim(EMAIL).asString())
			.withClaim(ROLE, decodeAccess.getClaim(ROLE).asString())
			.sign(getAlgorithm(decodeAccess.getId() + REFRESH_SECRET_KEY));
	}

	public static void isExpiredAccessToken(String accessToken) {
		JWTVerifier accessVerify = JWT.require(getAlgorithm(ACCESS_SECRET_KEY))
			.withIssuer(toDecode(accessToken).getIssuer())
			.build();
		accessVerify.verify(accessToken);
	}

	private static DecodedJWT toDecode(String accessToken) {
		return JWT.decode(accessToken);
	}

	public static AuthUser refreshAccessToken(OauthToken refreshToken, String accessToken) {
		if (refreshToken.isExpired()) {
			return AuthUser.reLogin();
		}
		return new AuthUser(getAccessToken(accessToken));
	}
}
