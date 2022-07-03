package com.sh.issuetracker.config;

import com.sh.issuetracker.login.oauth.ClientRegistration;
import com.sh.issuetracker.login.oauth.ClientRegistrationRepository;
import com.sh.issuetracker.login.oauth.InMemoryClientRegistrationRepository;
import com.sh.issuetracker.login.oauth.OAuthProvider;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import java.util.Arrays;
import java.util.List;

import lombok.AllArgsConstructor;

@Configuration
@AllArgsConstructor
public class SecurityConfig {
	private final InMemoryClientRegistrationRepository inMemoryClientRegistrationRepository;
	private final Environment environment;
	private final String registrationPath = "Oauth.client.registration.";

	private ClientRegistration googleClientRegistration() {
		String clientId = environment.getProperty(registrationPath + "google.client-id");
		String clientSecret = environment.getProperty(registrationPath + "google.client-secret");
		String redirectUri = environment.getProperty(registrationPath + "google.redirect-uri");
		return ClientRegistration.builder()
			.oAuthProvider(OAuthProvider.GOOGLE)
			.clientId(clientId)
			.clientSecret(clientSecret)
			.redirectUrl(redirectUri)
			.tokenUrl("https://www.googleapis.com/oauth2/v4/token")
			.userInfoUrl("https://www.googleapis.com/oauth2/v3/userinfo")
			.scope(new String[] {"openid", "profile", "email"})
			.build();
	}

	private ClientRegistration githubClientRegistration() {
		String clientId = environment.getProperty(registrationPath + "github.client-id");
		String clientSecret = environment.getProperty(registrationPath + "github.client-secret");
		String redirectUri = environment.getProperty(registrationPath + "github.redirect-uri");
		return ClientRegistration.builder()
			.oAuthProvider(OAuthProvider.GITHUB)
			.clientId(clientId)
			.clientSecret(clientSecret)
			.redirectUrl(redirectUri)
			.tokenUrl("https://github.com/login/oauth/access_token")
			.userInfoUrl("https://api.github.com/user")
			.scope(new String[] {"read:user"})
			.build();
	}

	@Bean
	public ClientRegistrationRepository clientRegistrationRepository() {
		final List<ClientRegistration> clientRegistrations = Arrays.asList(
			googleClientRegistration(),
			githubClientRegistration()
		);
		return new InMemoryClientRegistrationRepository(clientRegistrations);
	}
}
