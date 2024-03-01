import React from 'react';
import styles from '../css/userProfileComponent.module.css';


const users = [
  {
    name: 'William Menz',
    imageUrl: 'https://www.tu-ilmenau.de/fileadmin/Bereiche/EI/mt-avt/photos/team/Menz-William_2022.jpg',
    imageSize: 80,
    position: 'PhD Student',
  },
  {
    name: 'Alexander Raake',
    imageUrl: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=MoOhyrQAAAAJ&citpid=5',
    imageSize: 80,
    position: 'Principle Investigator',
  }
];

export default function TUILProfiles() {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index} className={styles.profileContainer}>
          <img
            className={styles.avatar}
            src={user.imageUrl}
            alt={'Photo of ' + user.name}
          />
          <div className={styles.profileText}>
            <h2 className={styles.userTitleText}>{user.name}</h2>
            <p className={styles.positionText}>{user.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
