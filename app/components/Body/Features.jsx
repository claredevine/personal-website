import styles from './_Body.scss';
import React from 'react';

export default class Features extends React.Component {
  render () {
    return (
      <div className={styles.padding}>
        <h2 className={styles.heading}>Features</h2>
        <p className={styles.pFontSize}>Sky Early Careers</p>
        <p className={styles.pFontSize}>Notre Dame Catholic Sixth Form College</p>
        <p className={styles.pFontSize}>Cardinal Heenan Catholic High School</p>
        <p className={styles.pFontSize}>Code First:Girls</p>
      </div>
    );
  }
}
