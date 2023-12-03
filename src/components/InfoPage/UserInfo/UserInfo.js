import React, { useEffect, useState } from "react";
import user from "../../img/user.png";
import styles from "./UserInfo.module.css";

function UserInfo() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    const categoryChoosen = JSON.parse(
      localStorage.getItem("selectedCategories")
    );
    setUserData({ ...storedData, categories: categoryChoosen });
  }, []);
  return (
    <div className={styles.mainBoxDiv}>
      <div>
        <img src={user} className={styles.userimg} />
      </div>
      <div>
        {userData ? (
          <div className={styles.info}>
            <p>{userData.name}</p>
            <p>{userData.email}</p>
            <h1>{userData.username}</h1>
            <div className={styles.choosenContainer}>
              {userData.categories && userData.categories.length > 0 && (
                <div className={styles.choosenC}>
                  {userData.categories.map((category, index) => (
                    <div key={index} className={styles.selectedC}>
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>User</p>
        )}
      </div>
    </div>
  );
}

export default UserInfo;
