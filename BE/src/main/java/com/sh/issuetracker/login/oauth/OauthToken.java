package com.sh.issuetracker.login.oauth;

import java.time.LocalDateTime;

public class OauthToken {
	private String refreshToken;
	private LocalDateTime createdAt;
	private LocalDateTime expiredAT;

	public OauthToken(String refreshToken) {
		this.refreshToken = refreshToken;
		this.createdAt = LocalDateTime.now();
		this.expiredAT = LocalDateTime.now().plusMonths(1L);
	}

	public boolean hasRefreshToken(String refreshToken) {
		return this.refreshToken.equals(refreshToken);
	}

	public boolean isExpired() {
		return this.expiredAT.isBefore(LocalDateTime.now());
	}
}
