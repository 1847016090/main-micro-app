import React, { memo } from "react";

const TestEnv = (props: any) => {
  const env = import.meta.env;
  return <div style={{ wordBreak: "break-all" }}>{JSON.stringify(env)}</div>;
};

export default memo(TestEnv);
