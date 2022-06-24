import { AxiosInstance, AxiosRequestConfig } from "axios";

import instance from "@/apis/interceptors";
import { IssueType } from "@/apis/type";

import type { PatchIssueStatusType } from "@/apis/type";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

const API = {
  getIssueList: (config?: AxiosRequestConfig) => {
    return instance({
      method: "get",
      url: "/api/issue-tracker/issues/",
      headers,
      ...config,
      // withCredentials: true,
    });
  },

  patchIssueStatus: (data: PatchIssueStatusType, config?: AxiosRequestConfig) => {
    return instance({
      method: "patch",
      url: "/api/issue-tracker/issues/status/",
      data: data,
      headers,
      ...config,
    });
  },
};

export default API;
