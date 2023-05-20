/** @format */

import React from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import { SubmitBtn } from "@/components/buttons";
import { PagePropsI } from "@/components/interface";

const ProfileEdit = ({ updatePage }: PagePropsI) => {
  return (
    <div>
      <h2 className={styles.header}>Profile</h2>
      <div className={styles.profile_image_container}>
        <Image src='/profile.svg' alt='profile picture' fill />
        <button className={styles.edit_icon_container}>
          <Image src='/edit_icon.svg' alt='edit icon' fill />
        </button>
      </div>
      <div className={styles.email_container}>
        <label className={styles.label} htmlFor='email'>
          Email
        </label>
        <input
          className={styles.input}
          id='email'
          placeholder='Enter your email'
          type='text'
          defaultValue={"janedoe@gmail.com"}
        />
      </div>
      <div className={styles.name_container}>
        <label className={styles.label} htmlFor='email'>
          First Name
        </label>
        <input
          className={styles.input}
          id='email'
          placeholder='Enter your email'
          type='text'
          defaultValue={"Jane"}
        />
      </div>

      <div className={styles.name_container}>
        <label className={styles.label} htmlFor='email'>
          Last Name
        </label>
        <input
          className={styles.input}
          id='email'
          placeholder='Enter your email'
          type='text'
          defaultValue={"Doe"}
        />
      </div>
      <div className={styles.editbtn_container}>
        <SubmitBtn onClick={updatePage} className='mb-8' label='Save' />
      </div>
    </div>
  );
};

export default ProfileEdit;
