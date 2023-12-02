import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import imgLoginpg from "../img/imgLoginpg.png";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const defaultValue = {
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  };
  const [valueInput, setValueInput] = useState(defaultValue);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // setValueInput({ ...valueInput, [name]: value });
    setValueInput({
      ...valueInput,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormError(validate(valueInput));
  //   setIsSubmit(true);
  //   navigate("/choice");
  // };

  // useEffect(() => {
  //   // console.log(formError);
  //   if (Object.keys(formError).length === 0 && isSubmit) {
  //     // console.log(valueInput);
  //     // navigate("/choice");
  //   }
  // }, [formError, isSubmit, valueInput, navigate]);

  // const validate = (value) => {
  //   const error = {};
  //   const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  //   const mobileRegex = /^\d{10}$/;

  //   if (!value.name || !value.username || !value.email || !value.mobile) {
  //     error.name = "Field is required";
  //   }
  //   // if (!emailRegex.test(value.email)) {
  //   //   error.email = "Enter valid email id";
  //   // }
  //   // if (!mobileRegex.test(value.mobile)) {
  //   //   error.mobile = "Enter valid mobile number";
  //   // }
  //   if (!value.checkbox) {
  //     error.checkbox = "Check this box if you want to proceed";
  //   }
  //   return error;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(valueInput);
    setFormError(errors);
    if (Object.keys(errors).length === 0) {
      // Save data to local storage
      localStorage.setItem("userData", JSON.stringify(valueInput));
      // Redirect to the next page
      navigate("/choice");
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      // Redirect to the next page
      navigate("/choice");
    }
  }, [formError, isSubmit, navigate]);

  const validate = (value) => {
    const error = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const mobileRegex = /^\d{10}$/;

    if (!value.name.trim()) {
      error.name = "Field is required";
    }
    if (!value.username.trim()) {
      error.username = "Field is required";
    }
    if (!value.email.trim()) {
      error.email = "Field is required";
    } else if (!emailRegex.test(value.email)) {
      error.email = "Enter a valid email address";
    }
    if (!value.mobile.trim()) {
      error.mobile = "Field is required";
    } else if (!mobileRegex.test(value.mobile)) {
      error.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!value.checkbox) {
      error.checkbox = "Check this box if you want to proceed";
    }
    return error;
  };

  return (
    <>
      <div className={styles["page-body"]}>
        <div>
          <p className={styles["img-text"]}>
            Discover new things on<br></br> SuperApp
          </p>
          <img src={imgLoginpg} alt="img" />
        </div>

        <div className={styles["form-build"]}>
          <h4>Super app</h4>
          <h7>Create your new account</h7>
          <form onSubmit={handleSubmit}>
            <label>
              <input
                className={formError.name ? styles["error"] : ""}
                type="text"
                placeholder="Name"
                name="name"
                value={valueInput.name}
                onChange={handleChange}
              />
            </label>
            <p>{formError.name}</p>
            <label>
              <input
                className={formError.username ? styles["error"] : ""}
                placeholder="UserName"
                type="text"
                name="username"
                value={valueInput.username}
                onChange={handleChange}
              />
            </label>
            <p>{formError.username}</p>
            <label>
              <input
                className={formError.email ? styles["error"] : ""}
                placeholder="Email"
                type="text"
                name="email"
                value={valueInput.email}
                onChange={handleChange}
              />
            </label>

            <p>{formError.email}</p>

            <label>
              <input
                className={formError.mobile ? styles["error"] : ""}
                placeholder="Mobile"
                type="text"
                name="mobile"
                value={valueInput.mobile}
                onChange={handleChange}
              />
            </label>
            <p>{formError.mobile}</p>

            <div className={styles["checkbox"]}>
              <input
                type="checkbox"
                name="checkbox"
                checked={valueInput.checkbox}
                onChange={handleChange}
              />
              <span>Share my registration data with Superapp</span>
            </div>
            <p>{formError.checkbox}</p>

            <button type="submit">SIGN UP</button>
          </form>
          <div className={styles["signup-text"]}>
            <p>
              By clicking on Sign up. you agree to Superapp
              <span>
                Terms and<br></br>Conditions of Use
              </span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              <br></br>
              protects your personal data please head Superapp
              <span>
                Privacy<br></br>Policy
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
