package com.sh.issuetracker.login.oauth.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@ToString
@Getter
@NoArgsConstructor
public class AuthUser {
	private String accessToken;
	private boolean reLogin = false;

	public AuthUser(String jwtAccessToken) {
		this.accessToken = jwtAccessToken;
	}

	public static AuthUser reLogin() {
		AuthUser authUser = new AuthUser();
		authUser.reLogin = true;
		return authUser;
	}

	public boolean isReLogin() {
		return this.reLogin;
	}
}
