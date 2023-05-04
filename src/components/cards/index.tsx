/** @format */

import Image from "next/image";
import React from "react";

import styles from "./styles.module.css";
import Logo from "../logo";
import { CardPropsI } from "../interface";

const Card = ({ isHome = true }: CardPropsI) => {
  return (
    <div className={styles.card_container}>
      <Image
        src='/card_template_home.svg'
        alt='Card template design'
        width={395}
        height={184}
        className='border border-transparent'
      />
      <div className={styles.card_details_group_one}>
        <p className={styles.card_name}>John Doe</p>
        <button className={styles.view_card_details}>
          <Image
            src='/settings.svg'
            alt='settings icon'
            width={32}
            height={32}
          />
        </button>
      </div>
      {isHome && (
        <div className={styles.card_details_group_two}>
          <p className={styles.card_address}>
            0x85807DC7cD410EFeFBA78e90087cc3ce9b9b7D0D
          </p>
        </div>
      )}

      <div className={styles.card_details_group_three}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.card_type}>
          <Image
            src='/mastercard.svg'
            alt='type of card'
            width={60}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
