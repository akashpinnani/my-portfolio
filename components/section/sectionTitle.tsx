import React from "react";
import styles from "../../styles/section/sectionTitle.module.scss";

type SectionTitleProps = {
    name: string;
}


export const SectionTitle = (props: SectionTitleProps) => {
    const {name} = props;
    return (
        <h1 className={styles.sectionTitle}>{name}</h1>
    )
}