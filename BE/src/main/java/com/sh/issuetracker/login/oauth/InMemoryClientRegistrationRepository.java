package com.sh.issuetracker.login.oauth;

import org.springframework.stereotype.Repository;
import org.springframework.util.Assert;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Repository
public class InMemoryClientRegistrationRepository implements ClientRegistrationRepository {
	private Map<OAuthProvider, ClientRegistration> memory = new HashMap<>();

	public InMemoryClientRegistrationRepository(List<ClientRegistration> clientRegistrations) {
		this.memory = clientRegistrations.stream()
			.collect(Collectors.toUnmodifiableMap(ClientRegistration::getProvider,
				clientRegistration -> clientRegistration));
	}

	private ClientRegistration get(OAuthProvider oAuthProvider) {
		Assert.notNull(oAuthProvider, "not empty key when read in InMemoryClientRegistrationRepository");
		return this.memory.get(oAuthProvider);
	}

	@Override
	public ClientRegistration findByRegistrationId(String oauthProvider) {
		OAuthProvider oAuthProvider = OAuthProvider.from(oauthProvider);
		return this.get(oAuthProvider);
	}
}
