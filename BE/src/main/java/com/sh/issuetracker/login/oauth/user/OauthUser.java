package com.sh.issuetracker.login.oauth.user;

import com.sh.issuetracker.login.oauth.OAuthProvider;

import lombok.Builder;
import lombok.ToString;

@ToString
public class OauthUser {
	private OAuthProvider provider;
	private String email;
	private String name;
	private String picture;
	private Long projectId;
	private String repo;
	private String company;
	private String blog;
	private Role role;

	@Builder
	public OauthUser(
		OAuthProvider provider,
		String email,
		String name,
		String picture,
		Long projectId,
		String repo,
		String company,
		String blog,
		Role role) {
		this.provider = provider;
		this.email = email;
		this.name = name;
		this.picture = picture;
		this.projectId = projectId;
		this.repo = repo;
		this.company = company;
		this.blog = blog;
		this.role = role;
	}

	public String getId() {
		return email;
	}

	public String nickName() {
		return name;
	}

	public String image() {
		return picture;
	}
}
