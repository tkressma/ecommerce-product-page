import profileAvatar from "../../images/image-avatar.png";
import styles from "./ProfileNav.module.css";
const ProfileNav = () => {
  return (
    <button className={styles["profile-container"]}>
      <img
        src={profileAvatar}
        className={styles["profile-picture"]}
        alt="Profile avatar"
      />
    </button>
  );
};

export default ProfileNav;
