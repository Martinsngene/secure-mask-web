/** @format */

import React from "react";

import { ButtonPropsInterface } from "../interface";
import styles from "./styles.module.css";
import Image from "next/image";

export const Button = ({ label, isFilled }: ButtonPropsInterface) => {
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
