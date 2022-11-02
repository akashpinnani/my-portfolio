import React from "react";
import styles from "../../styles/skill/skillIcon.module.css";
import Image from "next/image";

type SkillIconProps = {
  name: string;
  imgSrc?: any;
  showIcon?: boolean;
};

export const SkillIcon = (props: SkillIconProps) => {
  const { name, imgSrc, showIcon } = props;
  return (
    <div className={styles.skillIconWrapper}>
      {showIcon && (
        <div className={styles.iconWrapper}>
          <Image className={styles.icon} src={props.imgSrc} alt="skill logo" />
        </div>
      )}
      <div className={styles.iconName}>{props.name}</div>
    </div>
  );
};
