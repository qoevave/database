// CodeWithImage.js
import React from 'react';
import styles from '../css/textImageLeft.module.css'; // Import your CSS module

const TextImage = ({ description, imagePath }) => (
    <div className={styles.textWithImageContainer}>
        {/* Left column with code block (50% width) */}
        <div className={styles.textColumn}> 
            {description.title && <h3>{description.title}</h3>}
            {description.content}
        </div>
        {/* Right column with image (50% width) */}
        <div className={styles.imageColumn}>
            <img src={imagePath} alt="Your Image" className={styles.img} />
        </div>
    </div>
);

export default TextImage;
