import React from 'react';
import styles from './_Body.scss';
import image from './clareDevine.jpg';


let { PropTypes } = React;

export default class Hero extends React.Component {

  render() {
    return (
      <div className={styles.body}>
        <div className={styles.hero}>
          <img src={image} className={styles.photo} />
          <h1>Clare Devine</h1>
          <h3>Software Developer</h3>
          <center>
            <div className={styles.keyline}></div>
            <div className={styles.inlineImages}>
              <a href="https://github.com/claredevine">
                <i className={`fab fa-github ${styles.github}`}></i>
              </a>
              <i class={`fab fa-linkedin ${styles.linkedin}`}></i>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
