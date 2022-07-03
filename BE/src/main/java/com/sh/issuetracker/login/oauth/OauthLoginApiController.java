package com.sh.issuetracker.login.oauth;

import static com.sh.issuetracker.login.jwt.OauthJwtUtil.EXPIRED_DATE_OF_REFRESH_TOKEN;

import com.sh.issuetracker.login.oauth.user.AuthUser;

import org.apache.http.util.Asserts;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.security.AccessControlException;
import java.util.Arrays;
import java.util.Optional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class OauthLoginApiController {
	public static final String COOKIE_OAUTH_NAME = "user";
	private final OauthLoginService oauthLoginService;

	// 처음 로그인 링크
	// https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?
	// https://github.com/login/oauth/authorize?
	@GetMapping("/login/oauth2/code/{oauth-server}")
	public void loginOauth(@PathVariable("oauth-server") String oauthServerName,
		@RequestParam String code,
		@RequestParam String state,
		HttpServletResponse httpServletResponse) {
		AuthUser authUser = oauthLoginService.loginOfOauth(oauthServerName, code, state);

		Asserts.notNull(authUser, "Login is rejected");
		Cookie cookie = new Cookie(COOKIE_OAUTH_NAME, authUser.getAccessToken());
		cookie.setHttpOnly(true);
		cookie.setMaxAge(EXPIRED_DATE_OF_REFRESH_TOKEN);
		httpServletResponse.addCookie(cookie);
	}

	@GetMapping("/logout/oauth2")
	public void logout(HttpServletRequest request) {
		Optional<Cookie> cookieOptional = Arrays.stream(request.getCookies())
			.filter(it -> it.getName().equals(COOKIE_OAUTH_NAME))
			.findAny();

		if (cookieOptional.isPresent()) {
			Cookie cookie = cookieOptional.get();
			oauthLoginService.logout(cookie.getValue());
			cookie.setMaxAge(0);
		}
	}

	@GetMapping("/oauth2/access-token")
	public void isAccessToken(HttpServletRequest request) {
		Cookie cookie = Arrays.stream(request.getCookies())
			.filter(it -> it.getName().equals(COOKIE_OAUTH_NAME))
			.findAny()
			.orElseThrow(() -> new AccessControlException("invalid request with no cookie"));

		AuthUser authUser = oauthLoginService.refresh(cookie.getValue());

		if (authUser.isReLogin()) {
			cookie.setMaxAge(0);
			return;
		}
		cookie.setValue(authUser.getAccessToken());
	}
}
// @CookieValue(value = COOKIE_OAUTN_NAME) String authUser
