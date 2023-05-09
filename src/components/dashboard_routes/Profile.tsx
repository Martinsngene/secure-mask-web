/** @format */

import React from "react";

import styles from "./styles.module.css";
import Image from "next/image";

const Profile = () => {
  return (
    <div>
      <h2 className={styles.header}>Profile</h2>
      <div className={styles.profile_image_container}>
        {/* <Image src='/profile.svg' alt='profile picture' fill /> */}
        {/* <button className={styles.edit_icon_container}>
          <Image src='/edit_icon.svg' alt='edit icon' fill />
        </button> */}
      </div>
      
    </div>
  );
};

export default Profile;
