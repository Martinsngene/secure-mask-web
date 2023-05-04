/** @format */

import React from "react";

import styles from "./styles.module.css";
import Card from "../cards";

const HandWithCard = () => {
  return (
    <div className={`${styles.hand_container}`}>
      <div className={styles.card_container}>
        <Card isHome={false} />
      </div>
    </div>
  );
};

export default HandWithCard;
