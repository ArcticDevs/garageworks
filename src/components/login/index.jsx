import React, { useState, useEffect, useContext, useCallback } from "react";
import { Context } from "../../context";
import styles from "../../../styles/login.module.css";
import OtpInput from "react-otp-input";
// import toast from "../Toast";
import { useRouter } from "next/router";
// import Link from 'next/link'

const Login = () => {
  const { state, changeFunc } = useContext(Context);

  const router = useRouter();
  const {redirect} = router.query

  const [showErrorOtp, setShowErrorOtp] = useState(false);
  const [showErrorNum, setShowErrorNum] = useState(false);
  const [continueNum, setContinueNum] = useState(0);
  const [number, setNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  useEffect(() => {
    if(redirect === "kyc") {
      setNumber("1234567899")
    }
  },[redirect,router.query])

  //number input on change
  const handleOnchangeNumber = (e) => {
    setShowErrorNum(false);

    if (e.target.value.length === 10 && e.target.value !== "1234567899") {
      setShowErrorNum(true);
      setNumber(e.target.value.slice(0, 10));
    } else if (e.target.value.length > 10) {
      setNumber(e.target.value.slice(0, 10));
    } else {
      setNumber(e.target.value);
    }
  };

  //otp input on change
  const handleOnchangeOTP = (e) => {
    setShowErrorOtp(false);

    if (e.target.value.length === 4 && e.target.value !== "1234") {
      setShowErrorOtp(true);
      setOTP(e.target.value.slice(0, 4));
    } else if (e.target.value.length > 4) {
      setOTP(e.target.value.slice(0, 4));
    } else {
      setOTP(e.target.value);
    }
  };

  //conitnueNum change handler func
  const handleContinue = () => {
    setShowErrorNum(false)
    setShowErrorOtp(false);
    if (continueNum === 0 && !showErrorNum) {
      setContinueNum(1);
      setOTP("")
      setTimer(15)
    } else if (continueNum === 1 && !showErrorNum && !showErrorOtp) {
      setContinueNum(0);
      changeFunc.modalShow(false);
      router.push("/kycDetails");
    }
  };

  //timer functionality
  const [timer, setTimer] = useState(0);
  const timeOutCallback = useCallback(
    () => setTimer((currTimer) => currTimer - 1),
    []
  );

  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  return (
    <div className={`${styles.login} col-12 d-flex flex-column px-3`}>
      {/* header text in login tab*/}
      <div className={`${styles.login_header}`}>
        {continueNum === 0 ? (
          <h2>
            Enter your number to <br />
            Signup or Login
          </h2>
        ) : (
          continueNum === 1 && <h2 className='mb-1'>Please enter the OTP</h2>
        )}
      </div>

      {/* toggling between number input field & otp input field using continueNum state*/}
      {continueNum === 0 ? (
        <div className="form-floating my-3">
          <input
            type="text"
            className={`${styles.inputField} ${styles.input_phone} ${
              showErrorNum ? styles.input_phone__red : styles.input_phone__cyan
            } col-12 mx-auto form-control shadow-none`}
            id="number"
            placeholder="name@example.com"
            onChange={handleOnchangeNumber}
            value={number}
          />
          {showErrorNum && (
            <div id="number" className="invalid-feedback">
              Invalid Number
            </div>
          )}
          <label
            for="floatingInput"
            className="text-secondary"
            style={{ fontSize: "16px !important", textIndent: "-10px" }}
          >
            Enter your phone number*
          </label>
          <div
            className="col-12 text-muted d-flex flex-row-reverse"
            style={{
              marginTop: "-2px",
              letterSpacing: "1.5px",
              fontSize: "14px",
            }}
          >
            {number.length}/10
          </div>
        </div>
      ) : (
        <div className={`form-floating mt-2 ${styles.otp_field}`}>
          <input
            type={showOTP ? "text" : "password"}
            className={`${styles.inputField} ${styles.input_phone} col-12 mx-auto form-control shadow-none`}
            id="number"
            placeholder="name@example.com"
            onChange={handleOnchangeOTP}
            value={otp}
          />
          {showOTP ? (
            <svg
              viewBox="0 0 24 24"
              onClick={() => setShowOTP(!showOTP)}
              className={styles.show_hide_pw_icon}
            >
              <path
                fill="currentColor"
                d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              onClick={() => setShowOTP(!showOTP)}
              className={styles.show_hide_pw_icon}
            >
              <path
                fill="currentColor"
                d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
              />
            </svg>
          )}
          <label
            for="floatingInput"
            className="text-secondary"
          >
            Enter the OTP*
          </label>
          <div
            className="col-12 text-muted d-flex flex-row-reverse mt-1"
            style={{
              marginTop: "-8px",
              letterSpacing: "0.8px"
            }}
          >
            <h1 style={{ fontSize: "10px !important"}}>Sent OTP to {number}</h1> 
          </div>
          <div className="w-100 d-flex justify-content-between mt-4">
            {timer > 0 ? (
              <h6 className="text-muted" style={{ fontSize: "14px" }}>
                Resend OTP in 00:{timer < 10 && "0"}
                {timer}
              </h6>
            ) : (
              <h6
                className="text-danger"
                style={{ cursor: "pointer", fontSize: "14px" }}
                onClick={() => setTimer(15)}
              >
                {" "}
                <svg
                  style={{ width: "18px" }}
                  viewBox="0 0 24 24"
                  className="text-danger"
                >
                  <path
                    fill="currentColor"
                    d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z"
                  />
                </svg>{" "}
                Resend Now{" "}
              </h6>
            )}
            <h6
              className="text-danger"
              style={{ cursor: "pointer", fontSize: "14px" }}
              onClick={() => setContinueNum(0)}
            >
              Change Number
            </h6>
          </div>
        </div>
      )}

      {/* error msg when number is incorrect*/}
      {showErrorNum && (
        <h2 className={styles.invalid}>Invalid Mobile Number</h2>
      )}

      {/* error msg when otp is incorrect*/}
      {showErrorOtp && (
        <h2 className={styles.invalid} style={{marginTop:'-63px'}}>Invalid OTP</h2>
      )}

      {/* disabling button only when otp field is rendered & otp length is 0*/}
      <button
        className={`${styles.signup_btn} mt-1`}
        style={
          continueNum === 0 && number.length > 9
            ? { backgroundColor: "#01B9FF" }
            : continueNum === 1 && otp.length > 1
            ? { backgroundColor: "#01B9FF" }
            : { backgroundColor: "rgb(148, 149, 150)" }
        }
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default Login;
