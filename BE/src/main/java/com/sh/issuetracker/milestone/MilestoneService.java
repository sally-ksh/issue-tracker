package com.sh.issuetracker.milestone;

import com.sh.issuetracker.issue.IssueService;
import com.sh.issuetracker.issue.IssueStatus;
import com.sh.issuetracker.issue.dto.NumberOfIssueStatusImpl;
import com.sh.issuetracker.milestone.dto.MilestoneRequest;
import com.sh.issuetracker.milestone.dto.MilestoneResponse;
import com.sh.issuetracker.project.Project;
import com.sh.issuetracker.project.ProjectService;
import com.sh.issuetracker.user.AuthUser;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MilestoneService {
	private final ProjectService projectService;
	private final MilestoneRepository milestoneRepository;
	private final IssueService issueService;

	@Transactional
	public MilestoneResponse create(MilestoneRequest.Creation creationRequest, AuthUser authUser) {
		Project projectInfo = projectService.get(authUser.getProjectId());
		Milestone milestone = milestoneRepository.save(creationRequest.toMilestone(projectInfo));
		return MilestoneResponse.from(milestone);
	}

	@Transactional(readOnly = true)
	public List<MilestoneResponse> readAll(AuthUser authUser) {
		List<Milestone> milestones = milestoneRepository.findAllByProjectId(authUser.getProjectId());
		List<Long> ids = milestones.stream()
			.map(Milestone::getId)
			.collect(Collectors.toList());
		Map<Long, NumberOfIssueStatusImpl> numberOfIssueStatusMap = issueService.readByMilestones(ids);
		return milestones.stream()
			.map(milestone -> {
				if (numberOfIssueStatusMap.containsKey(milestone.getId())) {
					NumberOfIssueStatusImpl numberOfIssueStatus = numberOfIssueStatusMap.get(milestone.getId());
					Map<IssueStatus, Long> statusAndCount = numberOfIssueStatus.getStatusAndCount();
					return MilestoneResponse.from(milestone, statusAndCount);
				}
				return MilestoneResponse.from(milestone);
			}).collect(Collectors.toList());
	}
}
