import React from "react";
import { toast } from "react-toastify";

const ToastMessage = ({ type, message }) =>
    toast[type](
        <div style={{ fontSize: 15, padding: "8px 0px" }}>
            {message}
        </div>
    );

export default ToastMessage;