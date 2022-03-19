import React from "react";

import classes from "./Input.module.css";

// {...props.input} --> this syntax means that any prop coming from outside will be imported to the input here without me having to add every prop manually
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
