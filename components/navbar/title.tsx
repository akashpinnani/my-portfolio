import React from "react";
import styles from "../../styles/navbar/title.module.css";

export const Title = () => {
    return (
        <div className={styles.titleWrapper}>
            <div className={styles.circle}>A</div>
            <div className={styles.firstName}>Akash</div>
            <div className={styles.lastName}>Pinnani</div>
        </div>
    )
}