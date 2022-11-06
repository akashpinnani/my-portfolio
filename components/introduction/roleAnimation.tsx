import React from "react";
import styles from "../../styles/introduction/roleAnimation.module.scss";
import Typewriter from "typewriter-effect";

export const RoleAnimation = () => {
    const typingStrings = ['Software Engineer', 'UX enthusiast', 'Full Stack Developer']
  return (
    <div className={styles.role}>
      <Typewriter
        options={{
          strings: typingStrings,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};
