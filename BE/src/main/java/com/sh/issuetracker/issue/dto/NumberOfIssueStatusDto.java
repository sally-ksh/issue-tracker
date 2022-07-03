package com.sh.issuetracker.issue.dto;

import com.sh.issuetracker.issue.IssueStatus;

import java.util.HashMap;
import java.util.Map;

import lombok.Getter;
import lombok.ToString;

@ToString
@Getter
public class NumberOfIssueStatusDto {
	private Map<IssueStatus, Long> statusAndCount = new HashMap<>();

	public NumberOfIssueStatusDto() {
		this.statusAndCount = new HashMap<>();
	}

	public void insert(String issueStatus, Long statusCount) {
		statusAndCount.put(IssueStatus.get(issueStatus), statusCount);
	}
}
