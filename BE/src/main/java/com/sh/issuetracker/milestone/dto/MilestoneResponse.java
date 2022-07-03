package com.sh.issuetracker.milestone.dto;

import com.sh.issuetracker.issue.IssueStatus;
import com.sh.issuetracker.milestone.Milestone;

import java.util.Map;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@Builder(access = AccessLevel.PRIVATE)
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class MilestoneResponse {
	private final Long id;
	private final String title;
	private final String description;
	private final String completionDate;
	private final Long openStatusCount;
	private final Long closeStatusCount;

	public static MilestoneResponse from(Milestone milestone) {
		return MilestoneResponse.builder()
			.id(milestone.getId())
			.title(milestone.getTitle())
			.description(milestone.getDescription())
			.completionDate(milestone.getCompletionDate())
			.build();
	}

	public static MilestoneResponse from(Milestone milestone,
		Map<IssueStatus, Long> statusAndCount) {
		return MilestoneResponse.builder()
			.id(milestone.getId())
			.title(milestone.getTitle())
			.description(milestone.getDescription())
			.completionDate(milestone.getCompletionDate())
			.openStatusCount(statusAndCount.get(IssueStatus.OPEN))
			.closeStatusCount(statusAndCount.get(IssueStatus.CLOSE))
			.build();
	}
}
