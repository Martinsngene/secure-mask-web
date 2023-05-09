/** @format */

import React from "react";

import styles from "./styles.module.css";
import Input from "../customInput";
import Select from "../customSelect";
import { TransactionStatus } from "../constants";

const Transactions = () => {
  return (
    <div>
      <h2 className={styles.header}>Transactions</h2>
      <div className={styles.filter_container}>
        <div>
          <Input
            type='text'
            placeHolder='Search'
            id='search'
            htmlFor='search'
            label='Search transactions'
          />
        </div>
        <div>
          <Select
            label='Filter by status'
            defaultValue='All'
            itemsList={TransactionStatus}
          />
        </div>
      </div>
      <div className={styles.transactions_container}>
        {/* Table Heads, Columns */}
        <div className={styles.transaction_history_grid}>
          <div>
            <h3 className={styles.table_column}>Card Name</h3>
          </div>
          <div>
            <h3 className={styles.table_column}>Status</h3>
          </div>
          <div>
            <h3 className={styles.table_column}>Date</h3>
          </div>
          <div>
            <h3 className={styles.table_column}>Description</h3>
          </div>
        </div>
        {/* Tables Items, Rows */}
        <div className={styles.transaction_history_grid}>
          <div>
            <div className={styles.table_row}>Jane Doe</div>
          </div>
          <div>
            <div className={styles.table_row}>Pending</div>
          </div>
          <div>
            <div className={styles.table_row}>
              {Date.now().toLocaleString()}
            </div>
          </div>
          <div>
            <div className={styles.table_row}>Shopped at eBay</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
