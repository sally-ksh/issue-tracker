import { AxiosRequestConfig } from "axios";

import instance from "@/apis/interceptors";

import type { PatchIssueStatusType } from "@/apis/type";

const headers = {
  "Access-Control-Allow-Origin": "*",
};

const API = {
  getIssueList: (config?: AxiosRequestConfig<unknown>) => {
    return instance({
      method: "get",
      url: "/api/issue-tracker/issues/",
      headers,
      ...config,
      // withCredentials: true,
    });
  },

  patchIssueStatus: (data: PatchIssueStatusType, config?: AxiosRequestConfig<unknown>) => {
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
