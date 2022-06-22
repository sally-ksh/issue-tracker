export type IssueType = {
  issueId: number;
  issueNumber: number;
  title: string;
  content: string;
  status: string;
  createdAt: string;
  milestone: string;
  label: string[];
  author: string;
  authorImage: string;
};

export type PatchIssueStatusType = {
  issueId: number[];
  status: "OPEN" | "CLOSE";
};
