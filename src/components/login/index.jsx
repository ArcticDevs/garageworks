import React, { useState, useEffect, useContext } from "react";
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

  return (
    <div className={`${styles.login} col-12 text-center d-flex flex-column`}>
      <h4 className="fw-bold">Login / Sign-up to get up to ₹199 Off</h4>
      <form onSubmit={handleOnSubmit}>
        <input
          type="number"
          id="number"
          onChange={handleOnchange}
          value={number}
          className={`${styles.inputField} ${styles.phone} col-12 mx-auto mt-3`}
          placeholder="Enter your phone number"
          required
        />
        {showErrorNum && (
          <h4 className={styles.invalid}>Please provide a valid Number.</h4>
        )}
        {showOtpField && (
          <div>
            <h4 className="fw-bold mt-3">Welcome John!</h4>
            <div className={`${styles.register_options} mt-3`}>
              <OtpInput
                value={otpValue}
                onChange={(otp) => handleOtpState(otp)}
                numInputs={4}
                separator={<span>-</span>}
                isInputNum={true}
              />
            </div>
          </div>
        )}
        {verifyNum && (
          <div className='d-flex align-items-center justify-content-center mt-3'>
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
