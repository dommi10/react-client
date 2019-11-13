import React from "react";
import { Form } from "react-bootstrap";

export const Input = (
  {
    type = "text",
    placeholder = "text",
    value = "text",
    name = "text",
    onChange = null,
    isInvalid = false
  } = this.props
) => {
  return (
    <div>
      <Form.Control
        type={type}
        placeholder={placeholder}
        aria-describedby="inputGroupPrepend"
        // value={value}
        name={name}
        // onChange={onChange}
        // isInvalid={isInvalid}
      />
    </div>
  );
};
