import React from "react";
import { Button } from "react-bootstrap";

export const CButton = ({
  name,
  variant = "primary",
  onClick = null,
  size = "sm"
} = this.props) => {
  return (
    <div>
      <Button variant={variant} onClick={onClick} size={size}>
        {name}
      </Button>
    </div>
  );
};
