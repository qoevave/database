import React from 'react';
import styles from '../css/modelFeature.module.css';

function ModelComponent({ title, description, img1, img2, img3, info1}) {
  return (
    <>
    <div className={styles.dummyBackground}></div>
    <section className={styles.modelsection}>  
      <div className={styles.modeltext}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p> 
          <p className={styles.infopadding}>{info1}</p>
      </div>   
      <div class="row row--4">
        <img src={img1} alt={title} className={styles.img}/>    
        <img src={img2} alt={title} className={styles.img}/> 
        <img src={img3} alt={title} className={styles.img}/>   
      </div>  
    </section>
    </>
  );
}

export default ModelComponent;