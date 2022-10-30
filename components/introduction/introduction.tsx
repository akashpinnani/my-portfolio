import React from "react";
import { HiWithName } from "./hiWithName";
import { RoleAnimation } from "./roleAnimation";
import styles from "../../styles/introduction.module.css";


export const Introduction = () => {
    return (
        <div className={styles.container}>
        <HiWithName />
        <RoleAnimation />
        </div>
    )
}