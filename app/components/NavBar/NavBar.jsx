import styles from './_NavBar.scss';
import React from 'react';

export default class Body extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <ul className={styles.ul}>
        </ul>
      </div>
    );
  }
}
