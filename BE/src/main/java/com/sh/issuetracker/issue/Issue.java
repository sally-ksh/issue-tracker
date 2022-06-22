package com.sh.issuetracker.issue;

import com.sh.issuetracker.issuelabel.IssueLabel;
import com.sh.issuetracker.label.Label;
import com.sh.issuetracker.milestone.Milestone;
import com.sh.issuetracker.project.Project;
import com.sh.issuetracker.user.User;

import org.hibernate.annotations.Where;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedAttributeNode;
import javax.persistence.NamedEntityGraph;
import javax.persistence.NamedSubgraph;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;


@ToString(exclude = {"project"})
@NamedEntityGraph(name = "Issue.all",
attributeNodes = {
	@NamedAttributeNode("milestone"),
	@NamedAttributeNode("project"),
	@NamedAttributeNode("user"),
	@NamedAttributeNode(value = "issueLabels", subgraph = "issueLabels")},
	subgraphs = @NamedSubgraph(
		name = "issueLabels",
		attributeNodes = @NamedAttributeNode("label"))
)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode(of = "id")
@Where(clause = "is_deleted = false")
@Table(name = "issue_tracker_issue")
@Entity
public class Issue {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "issue_id")
	private Long id;

	@Column(name = "issue_title")
	private String title;
	@Enumerated(EnumType.STRING)
	@Column(name = "issue_status")
	private IssueStatus status;
	@Column(name = "issue_order")
	private int order;
	@Column(name = "created")
	private LocalDateTime createdAt;
	private boolean isDeleted;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "milestone_id")
	private Milestone milestone;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "project_id")
	private Project project;

	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "issue")
	private List<IssueLabel> issueLabels = new ArrayList<>();

	public Long getId() {
		return this.id;
	}

	public String getTitle() {
		return title;
	}

	public String getStatus() {
		return status.toString();
	}

	public int getOrder() {
		return order;
	}

	public String writer() {
		return user.nickName();
	}

	public String getCreatedAt() {
		return createdAt.toString();
	}

	public String milestoneTitle() {
		return this.milestone.getTitle();
	}

	public List<Label> labels() {
		return this.issueLabels.stream()
			.map(IssueLabel::getLabel)
			.collect(Collectors.toList());
	}

	public void changeStatus() {
		this.status = this.status.changeAnother();
	}
}