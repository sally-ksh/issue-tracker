package com.sh.issuetracker.login.oauth;

import com.auth0.jwt.exceptions.TokenExpiredException;
import com.sh.issuetracker.login.jwt.JwtToken;
import com.sh.issuetracker.login.jwt.OauthJwtUtil;
import com.sh.issuetracker.login.oauth.dto.Response;
import com.sh.issuetracker.login.oauth.user.AuthUser;
import com.sh.issuetracker.login.oauth.user.OauthUserMemoryRepository;
import com.sh.issuetracker.login.oauth.user.Role;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class OauthLoginService {
	private final OauthRestTemplate oauthRestTemplate;
	private final ClientRegistrationRepository clientRegistrationRepository;
	private final OauthUserMemoryRepository oauthUserMemoryRepository;
	private final TempOauthTokenMemoryRepository tempOauthTokenMemoryRepository;

	public AuthUser loginOfOauth(String oauthServerName, String code, String state) {
		ClientRegistration clientRegistration = clientRegistrationRepository.findByRegistrationId(oauthServerName);

		Response.Token responseOfToken = oauthRestTemplate.postToken(code, state, clientRegistration);

		ResponseEntity<Response.UserInfo> userInfoResponseEntity = oauthRestTemplate.getUserByToken(
			clientRegistration, responseOfToken);

		Response.UserInfo userInfo = userInfoResponseEntity.getBody();
		JwtToken jwtTokens = OauthJwtUtil.getJwtTokens(userInfo, Role.USER);

		oauthUserMemoryRepository.save(userInfo.toOauthUser(clientRegistration));  // insert or update
		tempOauthTokenMemoryRepository.save(new OauthToken(jwtTokens.getRefreshToken()));

		return new AuthUser(jwtTokens.getAccessToken());
	}

	public void logout(String accessToken) {
		String refreshToken = OauthJwtUtil.getRefreshToken(accessToken);
		tempOauthTokenMemoryRepository.remove(refreshToken);
	}

	public AuthUser refresh(String accessToken) {
		try {
			OauthJwtUtil.isExpiredAccessToken(accessToken);
		} catch (TokenExpiredException expiredException) {
			String refreshToken = OauthJwtUtil.getRefreshToken(accessToken);
			Optional<OauthToken> token = tempOauthTokenMemoryRepository.findByRefreshToken(refreshToken);
			if (token.isPresent()) {
				return OauthJwtUtil.refreshAccessToken(token.get(), accessToken);
			}
		}
		return AuthUser.reLogin();
	}
}
