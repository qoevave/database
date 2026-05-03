import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '../css/sceneCard.module.css';

function SceneCard({ imageUrl, imageAlt, highlights, metadata, to, buttonLabel = 'Scene details' }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={imageUrl}
          alt={imageAlt || ''}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        {highlights && highlights.length > 0 && (
          <ul className={styles.highlights}>
            {highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
        {metadata && metadata.length > 0 && (
          <dl className={styles.metadata}>
            {metadata.map(({ label, value }) => (
              <div key={label} className={styles.metaRow}>
                <dt className={styles.metaLabel}>{label}</dt>
                <dd className={styles.metaValue}>{value}</dd>
              </div>
            ))}
          </dl>
        )}
        <Link
          className={clsx(
            'button button--primary button--sm',
            styles.buttonRounder,
          )}
          to={to}>
          {buttonLabel}
        </Link>
      </div>
    </article>
  );
}

export default SceneCard;
