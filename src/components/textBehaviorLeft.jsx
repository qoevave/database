// CodeWithImage.js
import React from 'react';
import styles from '../css/textBehaviorLeft.module.css'; // Import your CSS module

const TextGIF = ({ description, imageGif }) => (
    <div className={styles.textWithImageContainer}>
                {/* Right column with image (50% width) */}
        <div className={styles.imageColumn}>
            <img src={imageGif} alt="Your Gif" />
        </div>
        {/* Left column with code block (50% width) */}
        <div className={styles.textColumn}> 
        <ul>
            {description.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
        </div>
    </div>
);

export default TextGIF;
