import React from "react";
import styles from "./giflayout.module.css";


const GIFsText = (props) => {
    return (
      <div className={styles["container"]}>
        <div className={styles["text"]}>
          <p>No audio</p>
          <p>Mono audio</p>
          <p>4OA audio</p>
        </div>
        <div className={styles["image-container"]}>
        <img src={props.img1} alt="GIF1" />
        <img src={props.img2} alt="GIF2" />
        <img src={props.img3} alt="GIF3" />
        </div>
      </div>
    );
  };


export default GIFsText;