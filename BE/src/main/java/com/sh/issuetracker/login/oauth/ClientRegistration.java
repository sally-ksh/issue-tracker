package com.sh.issuetracker.login.oauth;

import lombok.Builder;
import lombok.Getter;

@Getter
public class ClientRegistration {
	private final OAuthProvider provider;
	private final String clientId;
	private final String clientSecret;
	private final String redirectUrl;
	private final String tokenUrl;
	private final String userInfoUrl;
	private final ClientScope clientScope;

	@Builder
	public ClientRegistration(OAuthProvider oAuthProvider, String clientId, String clientSecret, String redirectUrl,
		String tokenUrl,
		String userInfoUrl, String... scope) {
		this.provider = oAuthProvider;
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.redirectUrl = redirectUrl;
		this.tokenUrl = tokenUrl;
		this.userInfoUrl = userInfoUrl;
		this.clientScope = new ClientScope(scope);
	}

	public String getClientScope() {
		return clientScope.toText();
	}
}
