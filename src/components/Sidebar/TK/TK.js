import React from 'react';
import { Link } from 'gatsby';
import styles from './TK.module.scss';

const TK = () => (
  <div className={styles['bonga']}>
    <pre>
      <p><b>You:</b> Hey, what's with the <b>.tk domain</b>?</p>
      <p><b>Me:</b> I'm glad you asked. Head over to
        <a href="https://techkenyans.tk/" target="_blank">
          <img src="/tk.png"></img>
        </a>
        to find out!
      </p >
    </pre>
  </div>
);

export default TK;
