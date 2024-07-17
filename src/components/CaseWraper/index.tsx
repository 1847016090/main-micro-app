import React, { memo } from "react";
import CaseWrapperItem from "./CaseWrapperItem";
import styles from "./index.module.less";

interface CaseWrapperProps {
  children: any;
}

/** @name 用例容器 */
const CaseWrapper = (props: CaseWrapperProps) => {
  console.log("props.children", props.children);

  // 拦截并且给子应用添加title属性
  const cloneChildren = Array.isArray(props.children)
    ? props.children.map((child: React.ReactElement) =>
        React.cloneElement(
          <CaseWrapperItem title={child.props.title}>{child}</CaseWrapperItem>
        )
      )
    : props.children;

  return <div className={styles["case-wrapper"]}>{cloneChildren}</div>;
};

export default memo(CaseWrapper);
