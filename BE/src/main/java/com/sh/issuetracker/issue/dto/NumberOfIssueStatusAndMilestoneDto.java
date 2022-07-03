package com.sh.issuetracker.issue.dto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class NumberOfIssueStatusAndMilestoneDto {
	private static Map<Long, NumberOfIssueStatusDto> numberOfIssueStatusMap = new HashMap<>();

	public static Map<Long, NumberOfIssueStatusDto> from(List<NumberOfIssueStatus> numberOfIssueStatuses) {
		for (NumberOfIssueStatus numberOfIssueStatus : numberOfIssueStatuses) {
			Long milestoneIdKey = numberOfIssueStatus.getMilestoneId();
			if (!numberOfIssueStatusMap.containsKey(milestoneIdKey)) {
				numberOfIssueStatusMap.put(milestoneIdKey, new NumberOfIssueStatusDto());
			}
			numberOfIssueStatusMap.get(milestoneIdKey)
				.insert(numberOfIssueStatus.getIssueStatus(), numberOfIssueStatus.getStatusCount());
		}
		return numberOfIssueStatusMap;
	}

}
