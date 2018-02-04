import styles from './_Body.scss';
import React from 'react';

export default class Contact extends React.Component {
  render () {
    return (
      <div className={styles.body}>
        <div className={styles.left}>
          <h1 className={styles.headings}>Get In Contact!</h1>
        </div>
      </div>
    );
  }
}
