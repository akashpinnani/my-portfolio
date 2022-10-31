import Link from "next/link";
import React from "react";
import styles from "../../styles/navbar/navbar.module.css";
import linkStyles from "../../styles/navbar/link.module.css";

import { NavLink } from "./navLink";
import { Title } from "./title";

export const NavLinksContainer = () => {
    return (
        <div className={styles.container}>
            <Title/>
            <div className={styles.linksWrapper}>
                <Link className={linkStyles.link} href={'#skills'}>Skills</Link>
                <Link className={linkStyles.link} href={'https://dev.to/akashvarma9'}>Blog</Link>
                <Link className={linkStyles.link} href={'#contact'}>Contact</Link>
            {/* <NavLink name="Skills" url="#skills"/> */}
            {/* <NavLink name="Blog" url="https://dev.to/akashvarma9"/> */}
            {/* <NavLink name="Contact" url="#contact"/> */}
            </div>
        </div>
    )
}