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
              <a href="https://github.com/claredevine">
                <i className={`fab fa-github ${styles.github}`}></i>
              </a>
              <a href="https://www.linkedin.com/in/clare-devine-a68756105/">
                <i className={`fab fa-linkedin ${styles.linkedin}`}></i>
              </a>
              <a href="https://twitter.com/clarecodes">
                <i className={`fab fa-twitter ${styles.twitter}`}></i>
              </a>
              <a href="https://clarecodes.com/">
                <i className={`fab fa-wordpress ${styles.wordpress}`}></i>
              </a>
          </center>
        </div>
      </div>
    );
  }
}
