import React, { useState } from "react";
import styles from "./ChoicePage.module.css";
import action from "../img/action.png";
import drama from "../img/drama.png";
import romance from "../img/romance.png";
import thriller from "../img/thriller.png";
import western from "../img/western.png";
import horror from "../img/horror.png";
import fantasy from "../img/fantasy.png";
import music from "../img/music.png";
import fiction from "../img/fiction.png";
import error from "../img/error.png";
import { useNavigate } from "react-router-dom";

function ChoicePage() {
  const navigate = useNavigate();
  const CategoryBox = [
    {
      id: "Action",
      image: (
        <img style={{ width: "150px", height: "80px" }} src={action} alt="1" />
      ),
      background: "#FF5209",
    },
    {
      id: "Drama",
      image: (
        <img style={{ width: "150px", height: "80px" }} src={drama} alt="2" />
      ),
      background: "#D7A4FF",
    },
    {
      id: "Romance",
      image: (
        <img style={{ width: "150px", height: "80px" }} src={romance} alt="2" />
      ),
      background: "#11B800",
    },
    {
      id: "Thriller",
      image: (
        <img
          style={{ width: "150px", height: "80px" }}
          src={thriller}
          alt="2"
        />
      ),
      background: "#84C2FF",
    },
    {
      id: "Western",
      image: (
        <img style={{ width: "150px", height: "80px" }} src={western} alt="2" />
      ),
      background: "#902500",
    },
    {
      id: "Horror",
      image: (
        <img style={{ width: "150px", height: "80px" }} src={horror} alt="2" />
      ),
      background: "#7358FF",
    },
    {
      id: "Fantasy",
      image: (
        <img style={{ width: "150px", height: "80px" }} src={fantasy} alt="2" />
      ),
      background: "#FF4ADE",
    },
    {
      id: "Music",
      image: (
        <img style={{ width: "150px", height: "80px" }} src={music} alt="2" />
      ),
      background: "#E61E32",
    },
    {
      id: "Fiction",
      image: (
        <img style={{ width: "150px", height: "80px" }} src={fiction} alt="2" />
      ),
      background: "#6CD061",
    },
  ];
  const [selectedOption, setSelectedOption] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleClick = (categoryId) => {
    if (!selectedOption.includes(categoryId)) {
      setSelectedOption((prevSelectedOption) => [
        ...prevSelectedOption,
        categoryId,
      ]);
    } else {
      const deleSelection = selectedOption.filter(
        (option) => option !== categoryId
      );
      setSelectedOption(deleSelection);
    }
  };

  const handleCancel = (categoryId) => {
    const deleteOption = selectedOption.filter(
      (option) => option !== categoryId
    );
    setSelectedOption(deleteOption);
  };
  const handlePage = () => {
    if (selectedOption.length >= 3) {
      navigate("/info");
    } else {
      setErrorMessage(true);
    }
  };
  return (
    <div className={styles.choicepage}>
      <div>
        <h4>Super app</h4>
        <h3>Choose your entertainment category</h3>

        <div className={styles.selectedBox}>
          {selectedOption.map((option) => (
            <span className={styles.selectedId} key={option}>
              {option}
              <span onClick={() => handleCancel(option)}>X</span>
            </span>
          ))}
        </div>
        {errorMessage && (
          <div className={styles.message}>
            <img
              src={error}
              style={{ height: "10px", width: "10px", marginRight: "10px" }}
            />
            Minimum 3 category required
          </div>
        )}
      </div>
      <div className={styles.categorybox}>
        {CategoryBox.map((category) => (
          <div
            key={category.id}
            style={{ backgroundColor: category.background }}
            className={styles.categoryInsideBox}
            onClick={() => handleClick(category.id)}
          >
            <h5
              style={{
                marginBottom: "10px",
                background: "none",
                fontSize: "20px",
              }}
            >
              {category.id}
            </h5>
            {category.image}
          </div>
        ))}
        <div className={styles.nextPage}>
          <button onClick={handlePage}> Next Page</button>
        </div>
      </div>
    </div>
  );
}

export default ChoicePage;
