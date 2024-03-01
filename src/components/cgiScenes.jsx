import React from 'react';
import styles from '../css/cgiScenes.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

function CGIComponent({ title, description, imageUrl, image2Url, information }) {
  return (
    <>
    <section className={styles.cgisection}>  
        <div className={styles.cgitext}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p> 
        </div>  
        <div className={styles.imgSection}>
            <img src={imageUrl} alt={title} className={styles.cgiimg}/>  
            <img src={image2Url} alt={title} className={styles.compimg}/> 
        </div>
        <p className={styles.informationText}>{information}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.buttonRounder)}
            to="/docs/cgi">
            CGI Scenes Database
          </Link>
        </div>       
    </section>
    </>
  );
}

export default CGIComponent;