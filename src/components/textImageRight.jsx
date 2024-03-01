// CodeWithImage.js
import React from 'react';
import styles from '../css/textImageRight.module.css'; // Import your CSS module

const TextImageRight = ({ description, imagePath }) => (
    <div className={styles.textWithImageContainer}>
        {/* Right column with image (50% width) */}
        <div className={styles.imageColumn}>
            <img src={imagePath} alt="Your Image" className={styles.img} />
        </div>
        {/* Left column with code block (50% width) */}
        <div className={styles.textColumn}> 
            {description.title && <h3>{description.title}</h3>}
            {description.content}
        </div>
    </div>
);

export default TextImageRight;
