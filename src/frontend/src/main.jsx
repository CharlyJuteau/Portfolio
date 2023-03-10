import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
// import { StackInfosContext } from "./contexts/StackContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <StackInfosContext> */}
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
    {/* </StackInfosContext> */}
  </React.StrictMode>
);

export default root;
