// import {Child} from "./Child";
import { Child } from "./Child";
import React from "react";

const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log("clicked")}>
      1
    </Child>
  );
};

export default Parent;
