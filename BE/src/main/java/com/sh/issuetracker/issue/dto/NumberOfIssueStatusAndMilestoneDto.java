package com.sh.issuetracker.issue.dto;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class NumberOfIssueStatusAndMilestoneDto {
	private Map<Long, NumberOfIssueStatusDto> numberOfIssueStatusMap = new HashMap<>();

	public static NumberOfIssueStatusAndMilestoneDto from(List<NumberOfIssueStatus> numberOfIssueStatuses) {
		NumberOfIssueStatusAndMilestoneDto numberOfIssueStatusAndMilestoneDto = new NumberOfIssueStatusAndMilestoneDto();
		return numberOfIssueStatusAndMilestoneDto.mapper(numberOfIssueStatuses);
	}

	public NumberOfIssueStatusAndMilestoneDto mapper(
		List<NumberOfIssueStatus> numberOfIssueStatuses) {
		for (NumberOfIssueStatus numberOfIssueStatus : numberOfIssueStatuses) {
			Long milestoneIdKey = numberOfIssueStatus.getMilestoneId();
			if (!numberOfIssueStatusMap.containsKey(milestoneIdKey)) {
				numberOfIssueStatusMap.put(milestoneIdKey, new NumberOfIssueStatusDto());
			}
			numberOfIssueStatusMap.get(milestoneIdKey)
				.insert(numberOfIssueStatus.getIssueStatus(), numberOfIssueStatus.getStatusCount());
		}
		return this;
	}

	public boolean contain(Long key) {
		return this.numberOfIssueStatusMap.containsKey(key);
	}

	public Map<com.sh.issuetracker.issue.IssueStatus, Long> countByStatus(Long key) {
		return this.numberOfIssueStatusMap.get(key).getStatusAndCount();
	}
}
