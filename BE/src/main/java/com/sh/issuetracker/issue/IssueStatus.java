package com.sh.issuetracker.issue;

public enum IssueStatus {
		OPEN, CLOSE;

	public IssueStatus changeAnother() {
		if (this.equals(OPEN)){
			return CLOSE;
		}
		return OPEN;
	}
}
