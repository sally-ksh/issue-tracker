package com.sh.issuetracker.login.jwt;

import lombok.Getter;

@Getter
public class JwtToken {
	private final String accessToken;
	private final String refreshToken;

	protected JwtToken(String accessToken, String refreshToken) {
		this.accessToken = accessToken;
		this.refreshToken = refreshToken;
	}
}
