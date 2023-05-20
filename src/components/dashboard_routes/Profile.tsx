/** @format */

import React, { useState } from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import { SubmitBtn } from "../buttons";
import ProfileEdit from "./edit/ProfileEdit";

const Profile = () => {
  const [editPage, setEditPage] = useState(false);

  const updateEditPage = () => setEditPage(!editPage);
  return (
    <>
      {!editPage ? (
        <div>
          <h2 className={styles.header}>Profile</h2>
          <div className={styles.profile_image_container}>
            <Image src='/profile.svg' alt='profile picture' fill />
          </div>
          <div className={styles.email_container}>
            <h3 className={styles.label}>Email</h3>
            <p className={styles.label_text}>janedoe@gmail.com</p>
          </div>
          <div className={styles.name_container}>
            <h3 className={styles.label}>Full Name</h3>
            <p className={styles.labelText}>Jane Doe</p>
          </div>
          <div className={styles.editbtn_container}>
            <SubmitBtn onClick={updateEditPage} className='mb-8' label='Edit' />
          </div>
        </div>
      ) : (
        <ProfileEdit updatePage={updateEditPage} />
      )}
    </>
  );
};

export default Profile;
