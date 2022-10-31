import React, { useState, useEffect, useContext, useCallback } from "react";
import { Context } from "../../context";
import styles from "../../../styles/login.module.css";
import OtpInput from "react-otp-input";
// import toast from "../Toast";
import { useRouter } from "next/router";
// import Link from 'next/link'

const Login = () => {
  const { state, changeFunc } = useContext(Context);

  const { userDetails } = state;

  const router = useRouter();

  const [showErrorOtp, setShowErrorOtp] = useState(false);
  const [showErrorNum, setShowErrorNum] = useState(false);

  const [showOtpField, setShowOtpField] = useState(false);
  const [verifyNum, setVerifyNum] = useState(false);

  const [otpValue, setOtpValue] = useState("");

  const handleOtpState = (data) => {
    setOtpValue(data);
    setShowErrorOtp(false);
  };

  const [formData, setFormData] = useState({
    number: userDetails.num || "",
    otp: userDetails.otp || "",
  });

  const { number } = formData;

  useEffect(() => {
    if (number.length >= 10) {
      setOtpValue(userDetails.otp);
      setVerifyNum(true);
      setTimeout(() => {
        setVerifyNum(false);
        setShowOtpField(true);
      }, 2000);
    }
  }, [number]);

  const handleOnchange = (e) => {
    setShowErrorNum(false);
    if (e.target.value.length >= 10) {
      setFormData({ ...formData, [e.target.id]: e.target.value.slice(0, 10) });
      setVerifyNum(true);
      setTimeout(() => {
        setVerifyNum(false);
        setShowOtpField(true);
      }, 2000);
    } else {
      setShowOtpField(false);
      setVerifyNum(false);
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (number !== "1234567899") {
      setShowErrorNum(true);
    } else if (
      otpValue === "" ||
      otpValue.length !== 4 ||
      otpValue !== "1234"
    ) {
      setShowErrorOtp(true);
    } else {
      setShowErrorOtp(false);
      setShowErrorNum(false);
      formData.otp = otpValue;
      if (number === "1234567899" && otpValue === "1234") {
        // toast({ type: "success", message: "You are logged in" });
        changeFunc.login({ num: number, otp: otpValue });
        changeFunc.modalShow(false);
        router.push("/kycDetails");
        console.log(formData);
      }
    }
  };

  const [timer, setTimer] = useState(36);    
  const timeOutCallback = useCallback(() => setTimer(currTimer => currTimer - 1), []);
  
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
  }, [timer, timeOutCallback]);

  return (
    <div className={`${styles.login} col-12 text-center d-flex flex-column`}>
      {!showOtpField ? (
        <h4 className="fw-bold">Login / Sign-up to get up to ₹199 Off</h4>
      ) : (
        <h4 className="fw-bold ">Welcome John!</h4>
      )}

      <form onSubmit={handleOnSubmit}>
        <input
          type="number"
          id="number"
          onChange={handleOnchange}
          value={number}
          className={`${styles.inputField} ${styles.phone} col-12 mx-auto my-2`}
          placeholder="Enter your phone number"
          required
        />
        {showErrorNum && (
          <h4 className={styles.invalid}>Please provide a valid Number.</h4>
        )}
        {showOtpField && (
          <div>
            <div className={`${styles.register_options} mt-3 mx-auto`}>
              <OtpInput
                value={otpValue}
                onChange={(otp) => handleOtpState(otp)}
                numInputs={4}
                separator={<span  style={{ marginLeft: "5px" , marginRight :"5px" }} ></span>}
                isInputNum={true}
                className="mr-3"
              />
            </div>
            <br />
            {timer > 0 ?<h6>Resend OTP in 00:{timer < 10 && '0'}{timer}</h6> :<h6 className='text-primary' style={{cursor: "pointer"}} onClick={() => setTimer(30)}>Resend again? </h6>}
          </div>
        )}
        {verifyNum && (
          <div className="d-flex align-items-center justify-content-center mt-3">
            Verifying number &nbsp;
            <div class="spinner-border" role="status">
              <span class="visually-hidden"> Loading...</span>
            </div>
          </div>
        )}

        {showErrorOtp && (
          <h4 className={styles.invalid}>Please provide a valid OTP.</h4>
        )}

        {/* <Link href="/kycDetails" className={`${styles.signup_btn} btn mt-3 w-100 text-decoration-none`}>Next</Link> */}

        <button type="submit" className={`${styles.signup_btn} mt-3 w-100`}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Login;
