import React, { useEffect } from "react";
import Image from "next/image";
import styles from "../styles/profileImage.module.css";
import { motion } from "framer-motion";
import useMousePosition from "../custom-hooks/usePosition";

export const ProfileImage = () => {
  const { x, y } = useMousePosition() as any;
  const transformMultiplier = 0.003;
  return (
    <div className={styles.profileImageContainer}>
      <div className={styles.profileBorder}></div>
      {/* <motion.div
        className={styles.motionDiv}
        // animate={{ x: x * transformMultiplier, y: y * transformMultiplier }}
      >
      </motion.div> */}

<div className={styles.profileImage}></div>

    </div>
  );
};
