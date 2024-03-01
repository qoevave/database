import React from "react";

import styles from "./river.module.css";

const Picture = ({background}) => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="alt.text.background" />
      </picture>
      <p className={styles.text1}>{"Texture"}</p>
      <p className={styles.text4}>{"Water"}</p>
    </article>
  );
};

export default Picture;