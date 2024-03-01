import React from "react";

import styles from "./train.module.css";

const Picture = ({background}) => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="alt.text.background" />
      </picture>
      <p className={styles.text1}>{"Speech"}</p>
      <p className={styles.text2}>{"Visual interest"}</p>
      <p className={styles.text3}>{"Movement"}</p>
      <p className={styles.text4}>{"source extent"}</p>
    </article>
  );
};

export default Picture;