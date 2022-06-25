package com.sh.issuetracker.issue.search;

import static com.sh.issuetracker.issue.QIssue.issue;
import static com.sh.issuetracker.member.QMember.member;
import static com.sh.issuetracker.milestone.QMilestone.milestone;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.sh.issuetracker.issue.IssueStatus;
import com.sh.issuetracker.user.AuthUser;

import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Repository;

import java.util.List;

import javax.persistence.EntityManager;

@Repository
public class IssueSearchRepository {
	private final JPAQueryFactory queryFactory;

	public IssueSearchRepository(EntityManager entityManager) {
		this.queryFactory = new JPAQueryFactory(entityManager);
	}

	public List<IssueSearchDto> search(AuthUser authUser, IssueSearchParam searchWord) {
		List<IssueSearchDto> issues = queryFactory.select(new QIssueSearchDto(
				issue.id.as("issueId"),
				issue.title.as("issueTitle"),
				issue.status.as("issueStatus"),
				issue.order.as("issueOrder"),
				issue.createdAt,
				member.user.nickName,
				member.user.image,
				milestone.milestoneTitle
			)).from(issue)
			.innerJoin(member).on((issue.author.id.eq(member.user.id)).and(issue.project.id.eq(member.project.id)))
			.leftJoin(milestone).on(issue.milestone.id.eq(milestone.id))    // milestoneId
			.where(
				issue.project.id.eq(authUser.getProjectId()),
				issue.status.eq(searchWord.status()),
				authorFrom(searchWord.author()),
				milestoneFrom(searchWord.milestone()))
			.fetch();
		return issues;
	}

	private BooleanExpression issueStatus(IssueStatus status) {
		BooleanExpression eq = issue.status.eq(status);
		return eq;
	}

	private BooleanExpression authorFrom(String authorName) {
		return Strings.isBlank(authorName) ? null : member.user.nickName.eq(authorName);
	}

	// issue 내 milestone_id는 null 야니면 id 가 있는데
	// - 여기서는 null 은 검색 조건에 안들어가고 milestone의 모든 경우가 조회 결과로 나온다.
	private BooleanExpression milestoneFrom(String milestoneTitle) {
		if (SearchKeyType.NONE.equals(milestoneTitle)) {
			return milestone.milestoneTitle.isNull();
		}
		// return milestone.milestoneTitle.eq(milestoneTitle).or(null);
		BooleanExpression expression =
			Strings.isBlank(milestoneTitle) ? null : milestone.milestoneTitle.eq(milestoneTitle);
		return expression;
	}
}
