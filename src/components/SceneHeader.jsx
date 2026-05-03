import React from 'react';
import styles from '../css/sceneHeader.module.css';

function SceneHeader({ imageUrl, imageAlt, location, geoTag }) {
  return (
    <div className={styles.header}>
      <div className={styles.imageWrap}>
        <img
          src={imageUrl}
          alt={imageAlt || '360° scene preview'}
          className={styles.image}
        />
      </div>
      <div className={styles.locationStrip}>
        <span className={styles.locationAddress}>📍 {location}</span>
        {geoTag && <span className={styles.geoTag}>{geoTag}</span>}
      </div>
    </div>
  );
}

export default SceneHeader;
