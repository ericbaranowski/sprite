import React from "react";
import Mermaid from "./Mermaid";
import "./Preview.css";

const Preview = ({ value, className }) => (
  <div className="preview">
    <Mermaid id="foo" content={value} />
  </div>
);

export default Preview;
