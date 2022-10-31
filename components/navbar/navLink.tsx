import React from "react";
import styles from "../../styles/navbar/link.module.css";
import Link from "next/link";

type NavLinkProps = {
  url: string;
  name: string;
  };

export const NavLink = (props: NavLinkProps) => {
  const { url, name} = props;
    return (
        <span className={styles.link}>
        <Link href={`${url}`} target="_blank" >{name}</Link>
        </span>
    )
}