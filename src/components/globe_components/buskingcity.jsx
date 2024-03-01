import React from "react";

import styles from "./buskingcity.module.css";

const Picture = ({background}) => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="alt.text.background" />
      </picture>
      <p className={styles.text1}>{"People"}</p>
      <p className={styles.text2}>{"Movement"}</p>
      
      <p className={styles.text4}>{"Reverberant"}</p>
      <p className={styles.text5}>{"Textures"}</p>
      <p className={styles.text6}>{"Music"}</p>
    </article>
  );
};

export default Picture;