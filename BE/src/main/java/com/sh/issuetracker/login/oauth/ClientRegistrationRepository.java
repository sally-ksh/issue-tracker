package com.sh.issuetracker.login.oauth;

public interface ClientRegistrationRepository {
	ClientRegistration findByRegistrationId(String oauthProvider);
}
