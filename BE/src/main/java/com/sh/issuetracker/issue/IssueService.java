package com.sh.issuetracker.issue;

import com.sh.issuetracker.issue.dto.IssueRequest;
import com.sh.issuetracker.issue.dto.IssueResponse;
import com.sh.issuetracker.user.AuthUser;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import lombok.RequiredArgsConstructor;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class IssueService {
	private final IssueRepository issueRepository;

	public List<IssueResponse.Row> readAllOf(AuthUser authUser, IssueStatus issueStatus) {
		List<Issue> issues = issueRepository.findAllByProjectIdAndStatus(
			authUser.getProjectId(),
			issueStatus);
		return toDto(issues);
	}

	public List<IssueResponse.Row> readAllOfAuthor(AuthUser authUser, IssueStatus issueStatus) {
		List<Issue> issues = issueRepository.findAllByProjectIdAndAuthorIdAndStatus(
			authUser.getProjectId(),
			authUser.getUserId(),
			issueStatus);
		return toDto(issues);
	}

	private List<IssueResponse.Row> toDto(List<Issue> issues) {
		return issues.stream()
			.map(IssueResponse.Row::from)
			.collect(Collectors.toList());
	}

	@Transactional
	public void update(IssueRequest request) {
		List<Issue> issues = issueRepository.findByIdIn(request.getIssueIds());
		issues.stream().forEach(Issue::changeStatus);
	}
}
