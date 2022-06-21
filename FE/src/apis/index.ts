import { AxiosRequestConfig } from "axios";

import instance from "@/apis/interceptors";

import type { PatchIssueStatusType } from "@/apis/type";

const API = {
  getIssueList: (config?: AxiosRequestConfig<unknown>) => {
    return instance({
      method: "get",
      url: "/issue-tracker/issues",
      ...config,
    });
  },

  patchIssueStatus: (data: PatchIssueStatusType, config?: AxiosRequestConfig<unknown>) => {
    return instance({
      method: "patch",
      url: "/issue-tracker/issues/status",
      data: data,
      ...config,
    });
  },
};

export default API;
