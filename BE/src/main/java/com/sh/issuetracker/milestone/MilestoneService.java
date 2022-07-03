package com.sh.issuetracker.milestone;

import com.sh.issuetracker.issue.IssueService;
import com.sh.issuetracker.issue.dto.NumberOfIssueStatusAndMilestoneDto;
import com.sh.issuetracker.milestone.dto.MilestoneRequest;
import com.sh.issuetracker.milestone.dto.MilestoneResponse;
import com.sh.issuetracker.project.Project;
import com.sh.issuetracker.project.ProjectService;
import com.sh.issuetracker.user.AuthUser;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MilestoneService {
	private final ProjectService projectService;
	private final MilestoneRepository milestoneRepository;
	private final IssueService issueService;

	@Transactional
	public MilestoneResponse create(MilestoneRequest.Creation creationRequest, AuthUser authUser) {
		Project project = projectService.get(authUser.getProjectId());
		Milestone milestone = milestoneRepository.save(creationRequest.toMilestone(project));
		return MilestoneResponse.from(milestone);
	}

	@Transactional(readOnly = true)
	public List<MilestoneResponse> readAll(AuthUser authUser) {
		List<Milestone> milestoneInfo = milestoneRepository.findAllByProjectId(authUser.getProjectId());
		Milestones milestones = Milestones.from(milestoneInfo);
		NumberOfIssueStatusAndMilestoneDto numberOfIssueStatusMap = issueService.readByMilestones(
			milestones.getMilestoneIds());
		return milestones.toResponses(numberOfIssueStatusMap);
	}
}
