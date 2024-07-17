import React, { memo } from "react";
import { testAlias } from "@/utils/utils";

const TestAlias = (props: any) => {
  return <div>{testAlias()}</div>;
};

export default memo(TestAlias);
