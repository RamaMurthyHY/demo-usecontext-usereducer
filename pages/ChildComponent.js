import React from "react";
import { useStore } from "../store/store";

const ChildComponent = () => {
  const { logoColor } = useStore();

  return <div style={{ color: logoColor }}> Child Component </div>;
};

export default ChildComponent;
