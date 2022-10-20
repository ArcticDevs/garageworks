import { useState } from 'react'
import styles from '../../../styles/account.module.css'
import OtpInput from 'react-otp-input';

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

    return (
        <div className='pb-5'>
            <div className={styles.account_head}>
                <h3>{origNum}</h3>
                <button onClick={() => moveBack(false)}>change?</button>
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
                <div>
                    <div className={styles.address_head}>
                        <h3>Address</h3>
                        <button>Locate you?</button>
                    </div>
                    <input
                        type="text"
                        className={`${styles.inputField} col-12 mx-auto mt-3`}
                        placeholder="Enter your Pincode"
                        autoComplete="off"
                        id='pincode'
                        value={pincode}
                        onChange={handleOnchange}
                    />
                    <input
                        type="text"
                        className={`${styles.inputField} col-12 mx-auto mt-3`}
                        placeholder="House/ Flat/ Office No."
                        autoComplete="off"
                        id='house'
                        value={house}
                        onChange={handleOnchange}
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
                    />
                </div>
                <button className={`${styles.signup_btn} mt-3`}>Sign up</button>
            </form>
        </div>
    )
}

export default Account