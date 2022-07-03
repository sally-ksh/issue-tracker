package com.sh.issuetracker.login.oauth;

import java.util.Arrays;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
public enum OAuthProvider {
	GOOGLE("google"), GITHUB("github");

	private final String lowerProvider;

	public static OAuthProvider from(String provider) {
		return Arrays.stream(values())
			.parallel()
			.filter(oAuthProvider ->
				oAuthProvider.toString().equals(provider) ||
					oAuthProvider.lowerProvider.equals(provider.toLowerCase()))
			.findAny()
			.orElseThrow(() -> new RuntimeException("no exist OAuthProvider"));
	}
}
