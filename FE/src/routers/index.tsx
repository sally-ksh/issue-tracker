import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingProgress from "@/components/common/LoadingProgress";
import Home from "@/pages/Home";
import IssueDetail from "@/pages/IssueDetail";
import IssueList from "@/pages/IssueList";
import IssueRegister from "@/pages/IssueRegister";
import Label from "@/pages/Label";
import Login from "@/pages/Login";
import Milestone from "@/pages/Milestone";
import NotFound from "@/pages/NotFound";
import ButtonTest from "@/test-pages/ButtonTest";
import DropdownTest from "@/test-pages/DropdownTest";
import ListLayoutTest from "@/test-pages/ListLayoutTest";

const Routers = ({ isOAuth }: { isOAuth: boolean }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={isOAuth ? <Home /> : <Login />}>
          <Route index element={<IssueList />} />
          <Route path="/issue-detail" element={<IssueDetail />} />
          <Route path="/issue-register" element={<IssueRegister />} />
          <Route path="/label" element={<Label />} />
          <Route path="/milestone" element={<Milestone />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/ButtonTest" element={<ButtonTest />} />
        <Route path="/DropdownTest" element={<DropdownTest />} />
        <Route path="/ListLayoutTest" element={<ListLayoutTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
