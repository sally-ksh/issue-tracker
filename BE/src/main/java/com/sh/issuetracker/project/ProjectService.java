package com.sh.issuetracker.project;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ProjectService {
	private final ProjectRepository projectRepository;

	public Project get(Long projectId) {
		return projectRepository.findById(projectId)
			.orElseThrow(()-> new RuntimeException("해당 프로젝트는 존재하지 않습니다."));
	}
}
