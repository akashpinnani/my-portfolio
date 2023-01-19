import React from "react";
import {
  FaGithub,
  FaCodepen,
  FaDev,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { Button } from "./button";
import styles from "../styles/homeLinks.module.scss";

export const HomeLinks = () => {
  return (
    <div className={styles.homeLinksContainer}>
      <Button url={"https://github.com/akashpinnani"}>
        <FaGithub />
      </Button>
      {/* <Button url={"https://www.linkedin.com/in/akash-pinnani-81770463/"}>
        <FaLinkedin />
      </Button> */}
      <Button url={"https://dev.to/akashvarma9"}>
        <FaDev />
      </Button>
      <Button url={"https://codepen.io/akashv459"}>
        <FaCodepen />
      </Button>
      <Button url={"https://twitter.com/AkashVarma9"}>
        <FaTwitter />
      </Button>
    </div>
  );
};
