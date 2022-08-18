import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

export default function Internal() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <div>
      <h1 style={mystyle}>Hello Internal Style!</h1>
      <p>My Internal Style</p>
    </div>
  );

}