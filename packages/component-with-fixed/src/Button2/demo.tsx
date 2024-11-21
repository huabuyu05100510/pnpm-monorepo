import React from "react";
import rawHtml from "./html";
export default () => {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }}></div>;
};
