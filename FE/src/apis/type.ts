export type IssueType = {
  issueId: number;
  issueNumber: number;
  title: string;
  content: string;
  status: string;
  creationDateTime: string | Date;
  milestone: string;
  label: number[];
  writerName: string;
  writerImage: string;
};

export type PatchIssueStatusType = {
  issueId: number[];
  status: "OPEN" | "CLOSE";
};
