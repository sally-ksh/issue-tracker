package com.sh.issuetracker.milestone;

import com.sh.issuetracker.issue.dto.NumberOfIssueStatusAndMilestoneDto;
import com.sh.issuetracker.milestone.dto.MilestoneResponse;

import java.util.ArrayList;
import java.util.List;
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

	List<MilestoneResponse> toResponses(NumberOfIssueStatusAndMilestoneDto numberOfIssueStatusMap) {
		return this.milestones.stream()
			.map(milestone -> {
				if (numberOfIssueStatusMap.contain(milestone.getId())) {
					return MilestoneResponse.from(milestone, numberOfIssueStatusMap.countByStatus(milestone.getId()));
				}
				return MilestoneResponse.from(milestone);
			}).collect(Collectors.toList());
	}
}
