import { useState, useEffect, createContext } from "react";

// initial state
const initialState = {
    user: { num: "", otp: "" },
    modal: false,
};

// create context
const Context = createContext();

// context provider
const Provider = ({ children }) => {

    const [modal, setModal] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    const modalToggle = () => {
        setModal(!modal)
    }

    const modalShow = (value) => {
        setModal(value)
    }

    const login = (value) => {
        setUserDetails({
            num: value.num,
            otp: value.otp,
        });
    };

    const logout = () => {
        setModal(false);
        setUserDetails({});
    };

    const contextValue = {
        state: {
            modal,
            userDetails
        },
        changeFunc: {
            modalToggle,
            modalShow,
            login,
            logout,
        },
    };

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, Provider };
