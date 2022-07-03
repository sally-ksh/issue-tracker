package com.sh.issuetracker.issue;

import com.sh.issuetracker.issue.dto.NumberOfIssueStatus;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IssueRepository extends JpaRepository<Issue, Long> {
	@EntityGraph(value = "Issue.all", type = EntityGraph.EntityGraphType.LOAD)
	List<Issue> findAllByProjectIdAndStatus(Long projectId, IssueStatus status);

	@EntityGraph(value = "Issue.all", type = EntityGraph.EntityGraphType.LOAD)
	List<Issue> findAllByProjectIdAndAuthorIdAndStatus(Long projectId, Long userId, IssueStatus status);

	List<Issue> findByIdIn(List<Long> issueIds);

	@EntityGraph(value = "Issue.all", type = EntityGraph.EntityGraphType.LOAD)
	List<Issue> findByMilestoneIsNull();

	@Query(value =
		"select issue_status as issueStatus, count(issue_status) as statusCount, milestone_id as milestoneId"
			+ " from issue_tracker_issue"
			+ " where milestone_id in :milestoneIds"
			+ " group by issue_status, milestone_id", nativeQuery = true)
	List<NumberOfIssueStatus> findGroupBy(@Param("milestoneIds") List<Long> milestoneId);
}
