import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useBreakpoints from "../cutomHooks/useBreakpoints"
import useMountTransition from "../cutomHooks/useMountTransition";
import Login from "./login";
import styles from '../../styles/modal.module.css'

const Modal = ({ show, onClose }) => {

    const [isBrowser, setIsBrowser] = useState(false);
    const hasTransitionedIn = useMountTransition(show, 1000);

    const { isMd } = useBreakpoints();

    const [error, setError] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
        localStorage.setItem('modal',show)

        const closeOnEscapeKeyDown = e => {
            if ((e.charCode || e.keyCode) === 27) {
                onClose();
            }
        };

        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return () => document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    }, [onClose,show]);

    const handleModalClose = () => {
        onClose();
    }

    const modalContent = hasTransitionedIn || show ? (
        <div className={`${styles.modal_overlay} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={handleModalClose}>
            <div className={`${isMd ? styles.modal_position_mob : styles.modal_position_desk} ${hasTransitionedIn && show ? styles.modal_show : styles.modal_hide}`} onClick={e => e.stopPropagation()}>
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <button className={styles.modal_close_btn} onClick={handleModalClose}>X</button>
                        <Login />
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