import React from 'react';
import clsx from 'clsx';
import styles from '../css/docFigure.module.css';

/**
 * DocFigure — scientific-style inline figure component.
 *
 * Props:
 *   imagePath     {string}           – image source
 *   imageAlt      {string}           – alt text
 *   label         {string}           – small eyebrow label
 *   title         {string}           – bold figure title
 *   imagePosition {"left"|"right"}   – side layout image position (default "right")
 *   layout        {"side"|"stacked"} – "side" = image beside caption (default),
 *                                      "stacked" = image above caption (full width)
 *   children      {node}             – descriptive text / JSX content
 */
function DocFigure({
  imagePath,
  imageAlt,
  label,
  title,
  imagePosition = 'right',
  layout = 'side',
  children,
}) {
  if (layout === 'stacked') {
    return (
      <figure className={styles.figureStacked}>
        <img
          src={imagePath}
          alt={imageAlt || title || ''}
          className={styles.imageStacked}
        />
        <figcaption className={styles.captionStacked}>
          {label && <span className={styles.label}>{label} — </span>}
          {title && <strong className={styles.titleInline}>{title}. </strong>}
          <span className={styles.bodyInline}>{children}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={clsx(
        styles.figure,
        imagePosition === 'right' && styles.imageRight,
      )}>
      <div className={styles.imageWrap}>
        <img
          src={imagePath}
          alt={imageAlt || title || ''}
          className={styles.image}
        />
      </div>
      <figcaption className={styles.descriptionWrap}>
        {label && <p className={styles.label}>{label}</p>}
        {title && <p className={styles.title}>{title}</p>}
        <div className={styles.body}>{children}</div>
      </figcaption>
    </figure>
  );
}

export default DocFigure;
