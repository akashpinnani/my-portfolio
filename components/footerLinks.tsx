import React from "react";
import { faGithub, faInstagram, faCodepen, faDev, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Button } from "./button";
import styles from '../styles/footerContainer.module.css';


export const FooterLinks = () => {
    return <div className={styles.footerContainer}>
    <Button icon={faGithub}  url={'https://github.com/akashpinnani'}/>
    <Button icon={faLinkedin}  url={'https://www.linkedin.com/in/akash-pinnani-81770463/'}/>
    <Button icon={faDev}  url={'https://dev.to/akashvarma9'}/>
    <Button icon={faCodepen}  url={'https://codepen.io/akashv459'}/>
    <Button icon={faTwitter}  url={'https://twitter.com/AkashVarma9'}/>
    </div>
}