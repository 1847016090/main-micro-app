import React, { memo } from "react";
import cls from "classnames";
import styles from "./index.module.less";

const TestGlobalVars = (props: any) => {
  return (
    <div className={cls(styles["test-global-vars"], "font-size-24")}>
      TestGlobalVars
    </div>
  );
};

export default memo(TestGlobalVars);
