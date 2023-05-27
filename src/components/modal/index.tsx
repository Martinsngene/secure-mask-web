/** @format */

import React from "react";

import styles from "./styles.module.css";
import { ModalPropsI } from "../interface";

const Modal = ({ children }: ModalPropsI) => {
  return <div className={styles.modal_container}>{children}</div>;
};

export default Modal;
