import React from 'react';

import styles from './copyright.module.css';

export const Copyright: React.FC = () => {
  const currentDate = new Date();

  return (
    <div className={styles.copyright}>
      <p>
        Copyright © <span>07 happy days</span> {currentDate.getFullYear()}<span>. All rights reserved.</span>
      </p>
    </div>
  );
};
