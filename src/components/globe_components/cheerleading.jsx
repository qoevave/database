import React from "react";

import styles from "./cheerleading.module.css";

const Picture = ({background}) => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="alt.text.background" />
      </picture>
      <p className={styles.text1}>{"Vertical movement"}</p>
      <p className={styles.text2}>{"Speech"}</p>
      <p className={styles.text3}>{"360° activity"}</p>
      <p className={styles.text4}>{"Texture"}</p>
    </article>
  );
};

export default Picture;