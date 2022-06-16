package com.sh.issuetracker.milestone.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class MilestoneResponse {
	private final Long id;
	private final String title;
	private final String description;
	private final String completionDate;
}
