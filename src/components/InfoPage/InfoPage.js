import React from "react";
import styles from "./InfoPage.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Weather from "./Weather/Weather";
import News from "./News/News";
import Notes from "./Notes/Notes";
import Timer from "./Timer/Timer";
import { useNavigate } from "react-router-dom";

function InfoPage(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/entertainment");
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.timerAlong}>
          <div className={styles.notesAlong}>
            <div className={styles.userWeather}>
              <div>
                <UserInfo />
              </div>
              <div>
                <Weather />
              </div>
            </div>
            <div>
              <Notes />
            </div>
          </div>
          <div>
            <Timer />
          </div>
        </div>
        <div>
          {/* <News /> */}
          <button onClick={handleClick}>Browse</button>
        </div>
      </div>
    </>
  );
}

export default InfoPage;
