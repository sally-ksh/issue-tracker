package com.sh.issuetracker.login.oauth.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.sh.issuetracker.login.oauth.ClientRegistration;
import com.sh.issuetracker.login.oauth.user.OauthUser;
import com.sh.issuetracker.login.oauth.user.Role;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

public class Response {

	@ToString
	@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
	@Getter
	@NoArgsConstructor
	public static class Token {
		private String accessToken;
		private String expiresId;
		private String scope;
		private String tokenType;
		private String idToken;
	}

	// GitHub
	@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
	@Getter
	@NoArgsConstructor
	public static class UserInfo {
		private String login;    // user's nickname logined
		private String htmlUrl;  // 깃 저장소
		private String avatarUrl;  // 깃 프로필 이미지  // https://api.github.com/users/sally-ksh/repos 통해 각 저장소별 타이틀 가져올 수 있다.
		private String email;
		private String type;  // User
		private boolean siteAdmin;
		private String company;
		private String blog;
		private String repo;

		public OauthUser toOauthUser(ClientRegistration clientRegistration) {
			return OauthUser.builder()
				.provider(clientRegistration.getProvider())
				.email(this.getEmail())
				.name(this.getLogin())
				.picture(this.getAvatarUrl())
				.repo(this.getRepo())
				.blog(this.getBlog())
				.company(this.getCompany())
				.role(Role.getFromAdminStatus(this.isSiteAdmin()))
				.build();
		}

		public String getName() {
			return this.login;
		}

		public String getPicture() {
			return this.avatarUrl;
		}
	}
}
