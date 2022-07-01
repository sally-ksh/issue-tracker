package com.sh.issuetracker.login.oauth;

import org.springframework.stereotype.Repository;

import java.security.AccessControlException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Repository
public class TempOauthTokenMemoryRepository {
	private static Set<OauthToken> oauthTokens = new HashSet<>();

	public void save(OauthToken oauthToken) {
		oauthTokens.add(oauthToken);
	}

	public void remove(String refreshToken) {
		oauthTokens.remove(get(refreshToken));
	}

	public OauthToken get(String refreshToken) {
		return findByRefreshToken(refreshToken)
			.orElseThrow(() -> new AccessControlException("invalid refresh token"));
	}

	public Optional<OauthToken> findByRefreshToken(String refreshToken) {
		return oauthTokens.stream()
			.filter(oauthToken -> oauthToken.hasRefreshToken(refreshToken))
			.findAny();
	}
}
