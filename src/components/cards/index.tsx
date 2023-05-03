/** @format */

import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";

const Card = () => {
  return (
    <div className={styles.card_container}>
      <Image
        src='/card_template_6.svg'
        alt='Card template design'
        width={395}
        height={184}
      />
      <div className={styles.card_details_group_one}>
        <p className={styles.card_name}>John Doe</p>
        <button className={styles.view_card_details}>
          <Image
            src='/settings.svg'
            alt='settings icon'
            width={30}
            height={30}
          />
        </button>
      </div>
      <div className={styles.card_details_group_two}>
        <p className={styles.card_address}>
          0x85807DC7cD410EFeFBA78e90087cc3ce9b9b7D0D
        </p>
      </div>

      <div className={styles.card_details_group_two}>
        <div className={styles.logo}></div>
        <div className={styles.card_type}></div>
      </div>
    </div>
  );
};

export default Card;
