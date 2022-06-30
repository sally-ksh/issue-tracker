package com.sh.issuetracker.login.oauth.user;

import org.apache.http.util.Asserts;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Repository
public class OauthUserMemoryRepository {
	Map<String, OauthUser> oauthUserMap = new HashMap<>();

	public OauthUser save(OauthUser oauthUser) {
		String id = oauthUser.getId();
		Asserts.notBlank(id, "The OauthUser is need to email");
		this.oauthUserMap.put(id, oauthUser);
		return oauthUserMap.get(id);
	}

	public Optional<OauthUser> findByEmail(String email) {
		OauthUser oauthUser = this.oauthUserMap.get(email);
		return Optional.ofNullable(oauthUser);
	}
}
