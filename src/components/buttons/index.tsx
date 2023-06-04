/** @format */

import React from "react";

import { ButtonPropsI } from "../interface";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

// Button with styles for filled and outline
export const Button = ({ label, isFilled, href }: ButtonPropsI) => {
  return (
    <Link href={`${href}`} passHref>
      <button
        className={`${isFilled ? styles.filled_btn : styles.outlined_btn}`}>
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
    </Link>
  );
};

// Button built to add new cards
export const AddNewCardBtn = ({ onClick }: ButtonPropsI) => {
  return (
    <button onClick={onClick} className={styles.new_card_btn_container}>
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

// Sign in with Google Button
export const SignInWithGoogleBtn = ({ label }: ButtonPropsI) => {
  return (
    <button className={styles.google_btn}>
      <Image
        src='/google.svg'
        alt='google icon'
        width={32}
        height={32}
        className='mr-3'
      />
      {label}
    </button>
  );
};

// Submit Button
export const SubmitBtn = ({ label, className, onClick }: ButtonPropsI) => {
  return (
    <button onClick={onClick} className={`${className} ${styles.submit_btn}`}>
      {label}
    </button>
  );
};
