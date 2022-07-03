package com.sh.issuetracker.login.oauth;

import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.ACCESS_TOKEN;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.AUTHORIZATION;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.CLIENT_ID;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.CLIENT_SECRET;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.CODE;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.GITHUB_VALUE_OF_AUTHORIZATION;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.GRANT_TYPE;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.REDIRECT_URI;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.SCOPE;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.STATE;
import static com.sh.issuetracker.login.oauth.dto.OauthTokenParam.VALUE_OF_GRANT_TYPE;

import com.sh.issuetracker.login.oauth.dto.Response;

import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.nio.charset.StandardCharsets;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class OauthRestTemplate {
	private final RestTemplate restTemplate;

	Response.Token postToken(String code, String state, ClientRegistration clientRegistration) {
		URI uri = UriComponentsBuilder
			.fromUriString(clientRegistration.getTokenUrl())
			.queryParam(GRANT_TYPE, VALUE_OF_GRANT_TYPE)
			.queryParam(CODE, code)
			.queryParam(REDIRECT_URI, clientRegistration.getRedirectUrl())
			.queryParam(CLIENT_ID, clientRegistration.getClientId())
			.queryParam(CLIENT_SECRET, clientRegistration.getClientSecret())
			.queryParam(STATE, state)
			.queryParam(SCOPE, clientRegistration.getClientScope())
			.encode()
			.build().toUri();

		RequestEntity<Void> requestEntity = RequestEntity
			.post(uri)
			.contentType(MediaType.valueOf(MediaType.APPLICATION_FORM_URLENCODED_VALUE))
			.acceptCharset(StandardCharsets.UTF_8)
			.build();

		ResponseEntity<Response.Token> response = restTemplate.exchange(requestEntity,
			new ParameterizedTypeReference<Response.Token>() {
			});
		return response.getBody();
	}

	ResponseEntity<Response.UserInfo> getUserByToken(ClientRegistration clientRegistration,
		Response.Token responseOfToken) {
		String accessToken = responseOfToken.getAccessToken();
		UriComponents oauthUserInfoUri = UriComponentsBuilder.fromUriString(clientRegistration.getUserInfoUrl())
			.queryParam(ACCESS_TOKEN, accessToken)
			.build();

		RequestEntity<Void> authorization = RequestEntity.get(String.valueOf(oauthUserInfoUri))
			.header(AUTHORIZATION, GITHUB_VALUE_OF_AUTHORIZATION)
			.build();

		ResponseEntity<Response.UserInfo> userInfoResponseEntity = restTemplate.exchange(authorization,
			new ParameterizedTypeReference<Response.UserInfo>() {
			});
		return userInfoResponseEntity;
	}
}
