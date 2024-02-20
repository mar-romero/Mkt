import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DesktopEight = React.lazy(() => import("pages/DesktopEight"));
const DesktopSeven = React.lazy(() => import("pages/DesktopSeven"));
const DesktopSix = React.lazy(() => import("pages/DesktopSix"));
const DesktopFive = React.lazy(() => import("pages/DesktopFive"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/desktopfive" element={<DesktopFive />} />
          <Route path="/desktopsix" element={<DesktopSix />} />
          <Route path="/desktopseven" element={<DesktopSeven />} />
          <Route path="/desktopeight" element={<DesktopEight />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
