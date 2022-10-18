import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useBreakpoints from "../cutomHooks/useBreakpoints"
import useMountTransition from "../cutomHooks/useMountTransition";
import Login from "./Login";
import Register from "./Register";
import styles from '../../styles/modal.module.css'

const Modal = ({ show, onClose }) => {

    const [togglePage, setTogglePage] = useState(false);
    const [isBrowser, setIsBrowser] = useState(false);
    const hasTransitionedIn = useMountTransition(show, 1000);

    const { isMd } = useBreakpoints();

    const [error, setError] = useState(false);

    useEffect(() => {
        setIsBrowser(true);

        const closeOnEscapeKeyDown = e => {
            if ((e.charCode || e.keyCode) === 27) {
                onClose();
            }
        };

        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return () => document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    }, [onClose]);

    const handleModalClose = () => {
        onClose();
        setTogglePage(false)
    }

    const modalContent = hasTransitionedIn || show ? (
        <div className={`${styles.modal_overlay} ${ hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={handleModalClose}>
            <div className={`${isMd ? styles.modal_position_mob : styles.modal_position_desk} ${ hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={e => e.stopPropagation()}>
                <div className={styles.modal}>
                    <div className="container row my-0 mx-auto">
                        <button className={styles.modal_close_btn} onClick={handleModalClose}>X</button>
                        {togglePage ?
                            <>
                                <Register />
                                <p className={`${styles.model_text_toggle} text-center`}>
                                    Already have an account?{" "}
                                    <span className={styles.model_text_toggle_btn} onClick={() => setTogglePage(false)}>Login now</span>
                                </p>
                            </>
                            :
                            <>
                                <Login />
                                <p className={`${styles.model_text_toggle} text-center`}>
                                    Don`t have an account?{" "}
                                    <span className={styles.model_text_toggle_btn} onClick={() => setTogglePage(true)}>Register now</span>
                                </p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

export default Modal;