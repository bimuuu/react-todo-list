import React from "react";
import { Spin } from "antd";

const Spinnner = ({ loading }) => {
  return <Spin loading={loading} />;
};

export default Spinnner;
