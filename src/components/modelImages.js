import React from 'react';
import styles from '../css/modelImages.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

function Image({ imageUrl, bulletPoints, sceneButton, to}) {
  return (
    <div className={styles.imageContainer}>
      <img src={imageUrl} className={styles.img}/>
      <div className={styles.textContainer}>
      <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.buttonRounder)}
            to={to}>
            {sceneButton}
          </Link>
        </div>      
        <ul className={styles.bulletPoints}>
          {bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Image;
