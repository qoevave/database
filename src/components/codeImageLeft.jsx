// CodeWithImage.js
import React from 'react';
import styles from '../css/codeImageLeft.module.css'; // Import your CSS module

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // You can choose different styles

import csharp from 'react-syntax-highlighter/dist/esm/languages/hljs/csharp';
SyntaxHighlighter.registerLanguage('csharp', csharp);

const customStyle = {
    lineHeight: '1.2',
    fontSize: '.9rem',
    borderRadius: '5px',
    backgroundColor: '#22222',
    padding: '20px'
  };

const CodeWithImage = ({ codeSnippet, imagePath }) => (
    <div className={styles.codeWithImageContainer}>
        {/* Left column with code block (50% width) */}
        <div className={styles.codeColumn}> 
            <SyntaxHighlighter language="csharp" style={dracula} customStyle={customStyle}>
                {codeSnippet}
            </SyntaxHighlighter>
        </div>
        {/* Right column with image (50% width) */}
        <div className={styles.imageColumn}>
            <img src={imagePath} alt="Your Image" className={styles.img} />
        </div>
    </div>
);

export default CodeWithImage;
