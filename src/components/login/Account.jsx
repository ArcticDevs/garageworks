import { useEffect, useState } from 'react'
import styles from '../../../styles/account.module.css'
import OtpInput from 'react-otp-input';
import { RiEditFill } from 'react-icons/ri'

const Account = ({ origNum, moveBack }) => {

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
        name: '',
        email: '',
        otp: "",
        pincode: "",
        house: "",
        road: "",
    })

    const { number, pincode, name, email, house, road } = formData;

    const handleOnchange = (e) => {
        setShowErrorNum(false)
        if (e.target.value.length >= 10 && e.target.id === 'number') {
            setFormData({ ...formData, [e.target.id]: e.target.value.slice(0, 10) })
            setShowOtpField(true)
        }
        else {
            setShowOtpField(false)
            setFormData({ ...formData, [e.target.id]: e.target.value })
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        formData.otp = otpValue;
        console.log(formData)
    }

    const handleLocation = () => {
        setFormData({...formData, pincode: "201310", house: "D12", road: "Pari-Chowk, Greater Noida" });
    }

    return (
        <div className='pb-5'>
            <div className={styles.account_head}>
                {/* <h3>{origNum}</h3>
                <button onClick={() => moveBack(false)}>change?</button> */}
                <input
                    type="text"
                    className={`${styles.inputField} ${styles.phone} col-8 mt-3`}
                    placeholder={origNum}
                    autoComplete="off"
                    value={origNum}
                    id='num'
                    disabled
                />
                <button onClick={() => moveBack(false)} className='col-1'>
                    <RiEditFill />
                </button>
            </div>
            <form onSubmit={handleOnSubmit}>
                <input
                    type="text"
                    className={`${styles.inputField} ${styles.name} col-12 mx-auto mt-3`}
                    placeholder="Enter your name"
                    autoComplete="off"
                    value={name}
                    id='name'
                    onChange={handleOnchange}
                    required
                />
                <input
                    type="email"
                    className={`${styles.inputField} ${styles.email} col-12 mx-auto mt-3`}
                    placeholder="Enter your email"
                    autoComplete="off"
                    value={email}
                    id='email'
                    onChange={handleOnchange}
                />
                <input
                    type="text"
                    id='number'
                    className={`${styles.inputField} ${styles.phone} col-12 mx-auto mt-3`}
                    placeholder="Enter your alternate phone number"
                    autoComplete="off"
                    onChange={handleOnchange}
                    value={number}
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
                <div className={styles.address_form}>
                    <div className={styles.address_head}>
                        <h3>Address</h3>
                        <button onClick={handleLocation}>Locate you?</button>
                    </div>
                    <input
                        type="text"
                        className={`${styles.inputField} col-12 mx-auto mt-3`}
                        placeholder="Enter your Pincode"
                        autoComplete="off"
                        id='pincode'
                        value={pincode}
                        onChange={handleOnchange}
                        required
                    />
                    <input
                        type="text"
                        className={`${styles.inputField} col-12 mx-auto mt-3`}
                        placeholder="House/ Flat/ Office No."
                        autoComplete="off"
                        id='house'
                        value={house}
                        onChange={handleOnchange}
                        required
                    />
                    <textarea
                        rows={3}
                        type="text"
                        className={`${styles.inputField} col-12 mx-auto mt-3`}
                        placeholder="Road Name/ Area/ Colony"
                        autoComplete="off"
                        id='road'
                        value={road}
                        onChange={handleOnchange}
                        required
                    />
                </div>
                <div className="d-flex align-items-center justify-content-between my-3">
                    <div>
                        <input
                            type="checkbox"
                            className={`${styles.input_checkbox} me-2`}
                        />
                        <span className={styles.register_font_weight}>Use this address for booking service</span>
                    </div>
                </div>
                <button className={`${styles.signup_btn} mt-3`}>Next</button>
            </form>
        </div>
    )
}

export default Account