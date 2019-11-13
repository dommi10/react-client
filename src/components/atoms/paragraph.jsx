import React from "react";

export const Paragraph = (
  { text = "this is a paragraph", color = "black" } = this.props
) => {
  return (
    <div>
      <p className="t-justfify">{text}</p>
    </div>
  );
};
