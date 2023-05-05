/** @format */

import React from "react";

import styles from "./styles.module.css";

const Transactions = () => {
  return (
    <div>
      <h2 className={styles.header}>Transactions</h2>
      <div className={styles.transactions_container}>
        {/* Table Headers, Columns */}
        <div className={styles.transaction_history_grid}>
          <div className='bg-red-500 w-[275px]'>
            <h3>Card Name</h3>
          </div>
          <div className='bg-emerald-500 w-[275px]'>
            <h3>Status</h3>
          </div>
          <div className='bg-blue-500 w-[275px]'>
            <h3>Date</h3>
          </div>
          <div className='bg-yellow-500 w-[275px]'>
            <h3>Description</h3>
          </div>
        </div>
        {/* Tables Items, Rows */}
        <div className={styles.transaction_history_grid}>
          <div className='bg-red-500 w-[275px]'>
            <div>Jane Doe</div>
          </div>
          <div className='bg-emerald-500 w-[275px]'>
            <div>Pending</div>
          </div>
          <div className='bg-blue-500 w-[275px]'>
            <div>{Date.now().toLocaleString()}</div>
          </div>
          <div className='bg-yellow-500 w-[275px]'>
            <div>Shopped at eBay</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
