import React, { memo } from "react";
import styles from "./CaseWrapperItem.module.less";

interface CaseWrapperItemProps {
  /** @name 标题 */
  title?: string;
  /** @name 子元素 */
  children: any;
}

const CaseWrapperItem = (props: CaseWrapperItemProps) => {
  const { title, children } = props;
  return (
    <div className={styles["case-wrapper-item"]}>
      <div className={styles.title}>{title}</div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default memo(CaseWrapperItem);
