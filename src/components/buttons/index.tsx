/** @format */

import React from "react";

import { ButtonPropsI } from "../interface";
import styles from "./styles.module.css";
import Image from "next/image";

// Button with styles for filled and outline
export const Button = ({ label, isFilled }: ButtonPropsI) => {
  return (
    <button className={`${isFilled ? styles.filled_btn : styles.outlined_btn}`}>
      {label}
      {!isFilled && (
        <Image
          src='/angle_right.svg'
          alt='angle_right'
          width={10}
          height={10}
          className='ml-3'
        />
      )}
    </button>
  );
};

// Button built to add new cards
export const AddNewCardBtn = () => {
  return (
    <button className={styles.new_card_btn_container}>
      <div className={styles.new_card_items_container}>
        <div className={styles.new_card_image}>
          <Image
            src='/add.svg'
            alt='Add new card button'
            width={32}
            height={32}
          />
        </div>
        <p className={styles.new_card_text}>Add new card</p>
      </div>
    </button>
  );
};
