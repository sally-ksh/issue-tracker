package com.sh.issuetracker.milestone;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MilestoneRepository extends JpaRepository<Milestone, Long> {
	List<Milestone> findAllByProjectId(Long projectId);
}
