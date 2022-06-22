package com.sh.issuetracker.issue.dto;

import java.util.List;

import javax.validation.constraints.NotEmpty;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IssueRequest {
	@NotEmpty(message = "이슈 없이 상태변경 할 수 없습니다.")
	private List<Long> issueIds;
	@NotEmpty(message = "변경할 상태를 입력 하세요.")
	private String status;
}
