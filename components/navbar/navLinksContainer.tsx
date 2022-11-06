import Link from "next/link";
import React from "react";
import styles from "../../styles/navbar/navbar.module.scss";
import linkStyles from "../../styles/navbar/link.module.scss";

import { Title } from "./title";

export const NavLinksContainer = () => {
    return (
        <div className={styles.container}>
            <Title/>
            <div className={styles.linksWrapper}>
                <Link className={linkStyles.link} href={'#skills'}>Skills</Link>
                <Link className={linkStyles.link} href={'https://dev.to/akashvarma9'}>Blog</Link>
                {/* <Link className={linkStyles.link} href={'#contact'}>Contact</Link> */}
            </div>
        </div>
    )
}