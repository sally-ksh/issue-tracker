package com.sh.issuetracker.login.oauth.user;

public enum Role {
	USER, ADMIN;

	public static Role getFromAdminStatus(boolean siteAdmin) {
		return siteAdmin ? ADMIN : USER;
	}

	public String text() {
		return this.toString();
	}
}
