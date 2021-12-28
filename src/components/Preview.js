import React from 'react';
import styles from '../styles/Preview.module.css';

const Preview = ({ info }) => {
  return (
    <section className={styles.active}>
      <div className={styles.sidebar}>
        <h2>
          {info.fname} {info.lname}
        </h2>
        <p>{info.job}</p>
        <h3>Contact</h3>
        <h4>Address</h4>
        <p>
          {info.city}, {info.state}, {info.zip}
        </p>
        <h4>Phone</h4>
        <p>{info.phone}</p>
        <h4>E-mail</h4>
        <p>{info.email}</p>
      </div>
      <div></div>
    </section>
  );
};

export default Preview;
