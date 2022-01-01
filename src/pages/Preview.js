import React from 'react';
import WorkHistory from '../components/WorkHistory';
import EduHistory from '../components/EduHistory';

import styles from '../styles/Preview.module.css';

const Preview = ({ info }) => {
  return (
    <section className={styles.active}>
      <div className={styles.sidebar}>
        <h2 className={styles.h2}>
          {info.fname} {info.lname}
        </h2>
        <p className={styles.job}>{info.job}</p>
        <div className={styles.sidebarHeader}>
          <h3>Contact</h3>
        </div>
        <h4 className={styles.sidebarh4}>Address</h4>
        <p>
          {info.city}, {info.state}, {info.zip}
        </p>
        <h4 className={styles.sidebarh4}>Phone</h4>
        <p>{info.phone}</p>
        <h4 className={styles.sidebarh4}>E-mail</h4>
        <p>{info.email}</p>
        <h3 className={styles.sidebarHeader}>Skills</h3>
      </div>
      <div className={styles.main}>
        <hr />
        <h3 className={styles.h3}>Work History</h3>
        <hr />
        <div className={styles.listGroup}>{info.work.map((job) => job.title && <WorkHistory {...job} key={job.id} />)}</div>
        <hr />
        <h3 className={styles.h3}>Education</h3>
        <hr />
        <div className={styles.listGroup}>{info.edu.map((school) => school.uni && <EduHistory {...school} key={school.id} />)}</div>
      </div>
    </section>
  );
};

export default Preview;
