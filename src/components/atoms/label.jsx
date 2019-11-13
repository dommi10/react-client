import React from "react";

export const Label = ({color = "black", model="", title="Label"} = this.props) => {
  switch (model) {
    case "top-title":
      return (
        <div>
          <h1 color={color}>{title}</h1>
        </div>
      );
    case "m-title":
      return (
        <div>
          <h3 color={color}>{title}</h3>
        </div>
      );
    case "s-title":
      return (
        <div>
          <h5 color={color}>{title}</h5>
        </div>
      );
    default:
      return (
        <div>
          <h6 color={color}>{title}</h6>
        </div>
      );
  }
};
