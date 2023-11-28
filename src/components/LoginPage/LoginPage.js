import React, { useState, useEffect } from "react";
import styles from "./LoginPage.module.css";
import imgLoginpg from "../img/imgLoginpg.png";

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // setValueInput({ ...valueInput, [name]: value });
    setValueInput({
      ...valueInput,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(valueInput));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(valueInput);
    }
  }, [formError]);

  const validate = (value) => {
    const error = {};
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const mobileRegex = /^\d{10}$/;

    if (!value.name || !value.username || !value.email || !value.mobile) {
      error.name = "Field is required";
    }
    // if (!emailRegex.test(value.email)) {
    //   error.email = "Enter valid email id";
    // }
    // if (!mobileRegex.test(value.mobile)) {
    //   error.mobile = "Enter valid mobile number";
    // }
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
                className={formError.name ? styles["error"] : ""}
                placeholder="UserName"
                type="text"
                name="username"
                value={valueInput.username}
                onChange={handleChange}
              />
            </label>
            <p>{formError.name}</p>
            <label>
              <input
                className={formError.name ? styles["error"] : ""}
                placeholder="Email"
                type="text"
                name="email"
                value={valueInput.email}
                onChange={handleChange}
              />
            </label>

            <p>{formError.name}</p>

            <label>
              <input
                className={formError.name ? styles["error"] : ""}
                placeholder="Mobile"
                type="text"
                name="mobile"
                value={valueInput.mobile}
                onChange={handleChange}
              />
            </label>
            <p>{formError.name}</p>

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
