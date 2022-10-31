import React from "react";
import styles from "../../styles/section/sectionSubTitle.module.css";

type SectionSubTitleProps = {
  name: string;
};

export const SectionSubTitle = (props: SectionSubTitleProps) => {
  const { name } = props;
  return <h2 className={styles.sectionSubTitle}>{name}</h2>;
};
