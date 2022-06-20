package com.sh.issuetracker.user;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class AuthUser {
	private Long userId = 1L;
	private Long projectId = 1L;

	public static AuthUser of() {
		return new AuthUser();
	}
}
