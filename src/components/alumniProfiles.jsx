import React from 'react';
import styles from '../css/userProfileComponent.module.css';


const users = [
  {
    name: 'Olli S. Rummukainen',
    imageUrl: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=-76G_nAAAAAJ&citpid=1',
    imageSize: 80,
    position: 'Associated Reseacher. AudioLabs (- April 2021)',
  },
  {
    name: 'Ashutosh Singla',
    imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.spp2236-audictive.de%2Fimages%2Fsingla2.jpg&f=1&nofb=1&ipt=3e11e2c72b179246e9323fc870578bdc1ffeea406c4f8691c1d9d30a97643523&ipo=images',
    imageSize: 80,
    position: 'PhD Student. AVT (- 2022)',
  }
];

export default function AlimniProfiles() {
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
