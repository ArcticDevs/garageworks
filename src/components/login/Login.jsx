import React, { useState, useEffect } from "react";
import styles from "../../../styles/login.module.css";
import OtpInput from 'react-otp-input';
import toast from "../Toast";
import { useRouter } from 'next/router'
import Link from 'next/link'

const Login = ({ setNum, moveAhead }) => {
  const router = useRouter()
    const [showErrorOtp, setShowErrorOtp] = useState(false);
    const [showErrorNum, setShowErrorNum] = useState(false);

    const [showOtpField, setShowOtpField] = useState(false);

    const [otpValue, setOtpValue] = useState("");

    const handleOtpState = (data) => {
        setOtpValue(data)
        setShowErrorOtp(false)
    }

    const [formData, setFormData] = useState({
        number: '',
        otp: "",
        remember: false,
    })

    const { number } = formData;

    const handleOnchange = (e) => {
        setShowErrorNum(false)
        if (e.target.value.length >= 10) {
            setFormData({ ...formData, [e.target.id]: e.target.value.slice(0, 10) })
            setShowOtpField(true)
        }
        else {
            setShowOtpField(false)
            setFormData({ ...formData, [e.target.id]: e.target.value })
        }
    }

    
    const handleModalClose = () => {
        onClose();
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (number !== '1234567899') {
            setShowErrorNum(true)
        }

        else if (otpValue === "" || otpValue.length !== 4 || otpValue !== "1234") {
            setShowErrorOtp(true)
        }

        else {
            setShowErrorOtp(false)
            setShowErrorNum(false)
            formData.otp = otpValue;
            if (number === '1234567899' && otpValue === "1234") {
                // toast({ type: "success", message: "You are logged in" });
                setNum(number)
                moveAhead(true)
                console.log(formData)
            }
        }
    }

    return (
        <div className={`${styles.login} col-12 text-center d-flex flex-column`}>
            <h4 className='fw-bold'>Login / Sign-up to get up to ₹199 Off</h4>
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
                {showErrorNum && <h4 className={styles.invalid}>Please provide a valid Number.</h4>}
                {showOtpField &&
                    <div className={`${styles.register_options} mt-3`}>
                        <OtpInput
                            value={otpValue}
                            onChange={(otp) => handleOtpState(otp)}
                            numInputs={4}
                            separator={<span>-</span>}
                            isInputNum={true}
                        />
                

                    </div>
                    
                }

                {showErrorOtp && <h4 className={styles.invalid}>Please provide a valid OTP.</h4>}

                <link href="/kycDetails" className={`${styles.signup_btn} btn mt-3 w-100 text-decoration-none` }>Next</link>
                
           
                {/* <button onClick={() => router.push('/kycDetails',handleModalClose)}  className={`${styles.signup_btn} mt-3 w-100`}>Next</button> */}
                
            </form>
        </div>
    );
};

export default Login;
