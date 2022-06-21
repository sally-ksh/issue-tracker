export type IssueType = {
  issueId: number;
  issueNumber: number;
  title: string;
  content: string;
  status: string;
  creationDateTime: string;
  milestone: string;
  label: string[];
  writerName: string;
  writerImage: string;
};

export type PatchIssueStatusType = {
  issueId: number[];
  status: "OPEN" | "CLOSE";
};
