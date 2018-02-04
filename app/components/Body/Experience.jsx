import styles from './_Body.scss';
import React from 'react';

export default class Experience extends React.Component {
  render () {
    return (
      <div className={styles.body}>
        <div className={styles.widths}>
        <div className={styles.widths}>
          <h1 className={styles.headings}>Work</h1>
          <p>Currently working in a large multi-media corporation, specialising in Broadband Diagnostic tools.</p>
          <p>I have experience working with:</p>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>ES6</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
          <p>As well as build tools, such as GitHub, Circle CI, Gulp, Grunt and Babel.</p>
          <p>Other expeience includes:</p>
          <ul>
            <li>Analytics migrations (JS and Ruby)</li>
            <li>Opensource toolkit contributor</li>
            <li>Public Speaking</li>
          </ul>
        </div>
        <div className={styles.widths}>
          <h1 className={styles.headings}>Recognition</h1>
          <p className={styles.center}>Code First: Girls - Ones To Watch 2017</p>
          <p className={styles.center}>Digital Ambassador for Leeds West</p>
        </div>
        <div className={styles.widths}>
          <h1 className={styles.headings}>Features</h1>
          <p className={styles.center}><em>Click the emoji to find out more...</em></p>
          <p className={styles.center}>Sky Early Careers</p>
          <p className={styles.center}>Notre Dame Catholic Sixth Form College</p>
          <p className={styles.center}>Code First: Girls</p>
        </div>
      </div>
    </div>
    );
  }
}
