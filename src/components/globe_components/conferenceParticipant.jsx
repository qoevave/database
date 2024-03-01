import React from "react";

import styles from "./conferenceParticipant.module.css";

const Picture = ({background}) => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={background} />
        <img src={background} alt="alt.text.background" />
      </picture>
      <p className={styles.text1}>{"Speech"}</p>
      <p className={styles.text2}>{"People"}</p>
      <p className={styles.text3}>{"180° activity"}</p>
      <p className={styles.text4}>{"Textures"}</p>
    </article>
  );
};

export default Picture;