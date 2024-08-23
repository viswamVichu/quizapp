import React from "react";
import ReactDOM from "react-dom/client";
import Quiz from "./components/Quiz/Quiz";
import "./index.css";

const AppLay = () => {
  return (
    <>
      <Quiz />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLay />);
