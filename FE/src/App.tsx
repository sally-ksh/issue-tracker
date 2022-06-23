import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import IssueDetail from "@/pages/IssueDetail";
import IssueList from "@/pages/IssueList";
import IssueRegister from "@/pages/IssueRegister";
import Label from "@/pages/Label";
import Login from "@/pages/Login";
import Milestone from "@/pages/Milestone";
import NotFound from "@/pages/NotFound";

const App = () => {
  // FIXME 임시 OAuth
  const isOAuth = true;

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
