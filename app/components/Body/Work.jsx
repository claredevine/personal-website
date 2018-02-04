import styles from './_Body.scss';
import React from 'react';

export default class Work extends React.Component {
  render () {
    return (
      <div className={styles.padding}>
        <h2 className={styles.heading}>Experience</h2>
        <p className={styles.pFontSize}>I currently work at a large media corporation, specialising in online help and broadband diagnostics.</p>
        <p className={styles.pFontSize}>I have experience working with:</p>
        <ul className={styles.pFontSize}>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>ES6</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
        <p className={styles.pFontSize}>As well as build tools such as GitHub, Circle CI, Gulp, Grunt and Babel.</p>
        <p className={styles.pFontSize}>Whilst in my job I have gained experience in different areas, for example, JavaScript and Ruby app migrations, public speaking and becoming an open source contributor.</p>
      </div>
    );
  }
}
