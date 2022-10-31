import React from "react";
import { HiWithName } from "./hiWithName";
import { RoleAnimation } from "./roleAnimation";
import styles from "../../styles/introduction.module.css";
import { Description } from "./description";
import { FooterLinks } from "../footerLinks";


export const Introduction = () => {
    return (
        <div className={styles.container}>
        <HiWithName />
        <RoleAnimation />
        <Description />
        <FooterLinks />
        </div>
    )
}