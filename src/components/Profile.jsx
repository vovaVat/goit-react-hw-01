import styles from './Profile.module.css'; 

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={styles.profile}>
            <div className={styles.profileHeader}>
                <img
                    src={image}
                    alt="User avatar"
                    className={styles.profileAvatar}
                />
                <h3 className={styles.profileName}>{name}</h3>
                <p className={styles.profileTag}>@{tag}</p>
                <p className={styles.profileLocation}>{location}</p>
            </div>

            <ul className={styles.profileStats}>
                <li className={styles.statsItem}>
                    <span className={styles.statsLabel}>Followers</span>
                    <span className={styles.statsValue}>{stats.followers}</span>
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.statsLabel}>Views</span>
                    <span className={styles.statsValue}>{stats.views}</span>
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.statsLabel}>Likes</span>
                    <span className={styles.statsValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}
