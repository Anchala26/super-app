import React from "react";
import styles from "./InfoPage.module.css";
import UserInfo from "./UserInfo/UserInfo";

function InfoPage(props) {
  return (
    <div className={styles.main}>
      <div>
        <div>
          <div>
            <div>
              <UserInfo />
            </div>
            <div> whether</div>
          </div>
          <div>notes</div>
        </div>
        <div>Timer</div>
      </div>
      <div>news</div>
    </div>
  );
}

export default InfoPage;
