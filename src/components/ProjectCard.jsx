import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '../css/projectCard.module.css';

function ProjectCard({ eyebrow, title, description, imageUrl, docLink, docLabel, badges }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.cardMedia}
        src={imageUrl}
        alt={title}
      />
      <div className={styles.cardContent}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <div className={styles.cardHeader}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <Link
            className={clsx(
              'button button--primary button--sm',
              styles.buttonRounder,
            )}
            to={docLink}>
            {docLabel}
          </Link>
        </div>
        <div className={styles.cardBody}>
          <p className={styles.cardDescription}>{description}</p>
        </div>
        {badges && badges.length > 0 && (
          <footer className={styles.cardFooter}>
            <ul className={styles.cardBadges} aria-label={`${title} key facts`}>
              {badges.map((badge) => (
                <li key={badge} className={styles.badge}>{badge}</li>
              ))}
            </ul>
          </footer>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
