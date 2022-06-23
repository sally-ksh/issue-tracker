package com.sh.issuetracker.issue;

public enum IssueStatus {
	OPEN, CLOSE;

	public IssueStatus changeAnother() {
		if (this == OPEN) {
			return CLOSE;
		}
		return OPEN;
	}

	public boolean isOpen() {
		return this == OPEN;
	}
}
