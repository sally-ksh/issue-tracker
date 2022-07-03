package com.sh.issuetracker.milestone;

import com.sh.issuetracker.issue.dto.NumberOfIssueStatusDto;
import com.sh.issuetracker.milestone.dto.MilestoneResponse;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class Milestones {
	private List<Milestone> milestones = new ArrayList<>();

	static Milestones from(List<Milestone> milestones) {
		return new Milestones(milestones);
	}

	List<Long> getMilestoneIds() {
		return this.milestones.stream()
			.map(Milestone::getId)
			.collect(Collectors.toList());
	}

	List<MilestoneResponse> toResponses(Map<Long, NumberOfIssueStatusDto> numberOfIssueStatusMap) {
		return this.milestones.stream()
			.map(milestone -> {
				if (numberOfIssueStatusMap.containsKey(milestone.getId())) {
					NumberOfIssueStatusDto numberOfIssueStatus = numberOfIssueStatusMap.get(milestone.getId());
					return MilestoneResponse.from(milestone, numberOfIssueStatus.getStatusAndCount());
				}
				return MilestoneResponse.from(milestone);
			}).collect(Collectors.toList());
	}
}
