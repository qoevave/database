import React from 'react';
import styles from '../css/saliencyFeature.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

function SaliencyComponent({ title, description, imageUrl}) {
  return (
    <>
    <section className={styles.saliencysection}>  
        <div className={styles.saliencytext}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p> 
            {/* <div className={styles.saliencybullet}>{info1}</div> */}
        </div>  
        <img src={imageUrl} alt={title} className={styles.saliencyimg}/>  
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.buttonRounder)}
            to="/docs/saliency">
            Saliency Database
          </Link>
        </div>       
    </section>
    </>
  );
}

export default SaliencyComponent;