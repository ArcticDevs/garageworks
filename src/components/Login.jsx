import React, { useState } from "react";
import styles from "../../styles/login.module.css";

const Login = () => {

    const [loginType, setLoginType] = useState(false)

    const [showpw, setShowpw] = useState(false);
    const [showcpw, setShowcpw] = useState(false);

    return (
        <div className={`${styles.login} col-12 text-center d-flex flex-column`}>
            <h1 className='fw-bold'>Welcome Back</h1>
            <h5>Login to your account</h5>
            <div className={styles.login_switch}>
                <button onClick={() => setLoginType(false)} className={loginType ? styles.switch_inactive : styles.switch_active}>Email</button>
                <button onClick={() => setLoginType(true)} className={loginType ? styles.switch_active : styles.switch_inactive}>Phone Number</button>
            </div>
            <form action="">
                {loginType ?
                    <input
                        type="text"
                        className={`${styles.inputField} ${styles.phone} col-12 mx-auto mt-3`}
                        placeholder="input your phone number"
                        autoComplete="off"
                    />
                    :
                    <input
                        type="text"
                        className={`${styles.inputField} ${styles.email} col-12 mx-auto mt-3`}
                        placeholder="input your email"
                        autoComplete="off"
                    />
                }
                <div className={styles.password_field}>
                    <input
                        type={showpw ? "text" : "password"}
                        className={`${styles.inputField} ${styles.pw} col-12 mx-auto mt-3`}
                        placeholder="input your password"
                        autoComplete="off"
                    />
                    {showpw ? (
                        <svg
                            viewBox="0 0 24 24"
                            onClick={() => setShowpw(!showpw)}
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
                            onClick={() => setShowpw(!showpw)}
                            className={styles.show_hide_pw_icon}
                        >
                            <path
                                fill="currentColor"
                                d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                            />
                        </svg>
                    )}
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <div>
                        <input
                            type="checkbox"
                            className={`${styles.input_checkbox} me-2`}
                        />
                        <span className={styles.register_font_weight}>Remember me</span>
                    </div>
                    <span className={styles.register_font_weight} style={{ cursor: 'pointer' }}>Forgot Password</span>
                </div>
                <button className={`${styles.signup_btn} mt-3 w-100`}>Login</button>
            </form>
            <p className={`${styles.continue_text} mt-3`}>or continue with</p>
            <div className={styles.register_options}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

export default Login;
