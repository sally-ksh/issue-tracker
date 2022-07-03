package com.sh.issuetracker.login.oauth;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class ClientScope {
	private Set<String> scopes = new HashSet<>();

	private ClientScope() {
	}

	public ClientScope(String... scope) {
		if (scope != null && scope.length > 0) {
			this.scopes = Collections.unmodifiableSet(new LinkedHashSet<>(Arrays.asList(scope)));
		}
	}

	public String toText() {
		return this.scopes.stream()
			.collect(Collectors.joining(" ")); // .reduce((s, s2) -> s + " " + s2)
	}
}

