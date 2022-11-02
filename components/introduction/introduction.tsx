import React from "react";
import { UserIntroductionName } from "./userIntroductionName";
import { RoleAnimation } from "./roleAnimation";
import styles from "../../styles/introduction.module.css";
import { Description } from "./description";


export const Introduction = () => {
    return (
        <div className={styles.container}>
        <UserIntroductionName />
        <RoleAnimation />
        <Description />
        </div>
    )
}