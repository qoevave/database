import React from "react";

import styles from "./parkFountains.module.css";

const Picture = ({background}) => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="alt.text.background" />
      </picture>
      <p className={styles.text1}>{"Water"}</p>
      <p className={styles.text2}>{"Movement"}</p>
      <p className={styles.text3}>{"Water"}</p>
    </article>
  );
};

export default Picture;