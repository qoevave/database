import React from 'react';
import styles from '../css/twoColumnComponent.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import GlobeComponent from './GlobeFeature.jsx';

function TwoColumnComponent({ title, description, imageUrl, information}) {
  return (
    <>
    <div className={styles.dummyBackground}></div>
    <section className={styles.micsection}>    
      <div className={styles.mictext}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p> 
      </div>  
      <div className={styles.imgSection}>
        <img src={imageUrl} alt={title} className={styles.micimg}/>
        {/* <GlobeComponent /> */}
      </div>
      <p className={styles.informationText}>{information}</p>
      <div className={styles.buttons}>
        <Link
          className={clsx('button button--primary button--lg', styles.buttonRounder)}
          to="/docs/scenes">
          360 Scenes Database
        </Link>
      </div>     
    </section>
    </>
  );
}

export default TwoColumnComponent;