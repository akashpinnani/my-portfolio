import React from "react";
import styles from "../styles/button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

type ButtonProps = {
  icon: IconDefinition;
  url: string;
};

export const Button = (props: ButtonProps) => {
  const { url, icon } = props;
  return (
    <Link href={url} target="_blank" className={styles.button}>
        <FontAwesomeIcon icon={icon} />
    </Link>
  );
};
