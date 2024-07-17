import React, { memo } from "react";
import { SuperButton } from "@rokid-library/components";
const TestComponents = (props: any) => {
  return (
    <div>
      <SuperButton type="primary">主要按钮</SuperButton>
    </div>
  );
};

export default memo(TestComponents);
