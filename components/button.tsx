import React from "react";
import styles from "../styles/button/button.module.scss";
import Link from "next/link";

type ButtonProps = {
  url: string;
  children: any;
};

export const Button = (props: ButtonProps) => {
  const { url } = props;
  return (
    <Link href={url} target="_blank" className={styles.button}>
        {props.children}
    </Link>
  );
};
