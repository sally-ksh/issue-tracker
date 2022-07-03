package com.sh.issuetracker.common.exception;

import static com.sh.issuetracker.login.oauth.OauthLoginApiController.COOKIE_OAUTH_NAME;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.sh.issuetracker.exception.NoneSearchParamException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.security.AccessControlException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestControllerAdvice
public class GlobalControllerAdvice {
	public static final String ERROR_OF_SERVER_MESSAGE = "죄송합니다. 잠시후에 다시 이용해주세요.";

	@ExceptionHandler(value = Exception.class)
	public ResponseEntity exception(Exception exception) {
		log.error(exception.getMessage());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ERROR_OF_SERVER_MESSAGE);
	}

	/**
	 * 검색키워드 불일치시 빈 리스트 반환합니다.
	 * @param exception
	 * @return
	 */
	@ExceptionHandler(NoneSearchParamException.class)
	public ResponseEntity<List<String>> invalidSearchParamException(NoneSearchParamException exception) {
		log.error(exception.getMessage());
		return ResponseEntity.status(HttpStatus.OK).body(List.of());
	}

	@ExceptionHandler(AccessControlException.class)
	public ResponseEntity<String> accessControlException(
		AccessControlException exception, HttpServletRequest request) {
		String message = exception.getMessage();
		removeCookie(request);
		log.error(message);
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(message);
	}

	@ExceptionHandler(JWTVerificationException.class)
	public ResponseEntity<String> jWTVerificationException(
		AccessControlException exception, HttpServletRequest request) {
		String message = exception.getMessage();
		removeCookie(request);
		log.error(message);
		return ResponseEntity.status(HttpStatus.FORBIDDEN).body(message);
	}

	private void removeCookie(HttpServletRequest request) {
		Arrays.stream(request.getCookies())
			.parallel()
			.filter(cookie -> cookie.getName().equals(COOKIE_OAUTH_NAME))
			.forEach(cookie -> cookie.setMaxAge(0));
	}
}
