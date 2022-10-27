import { useContext, useState } from "react";
import { Context } from "../src/context";
import styles from "../styles/account.module.css";
import { RiEditFill } from "react-icons/ri";
import { useRouter } from "next/router";

const KycDetails = () => {
    const { state, changeFunc } = useContext(Context);

    const { userDetails } = state;

    console.log(state);

    const [allowLocation, setAllowLocation] = useState(false);
    const [userLocation, setUserLocation] = useState({
        lat: null,
        lng: null,
    });

    const router = useRouter();

    // const [showErrorOtp, setShowErrorOtp] = useState(false);
    const [showErrorNum, setShowErrorNum] = useState(false);

    const [checkboxValue, setCheckboxValue] = useState(true);

    // const [showOtpField, setShowOtpField] = useState(false);

    // const [otpValue, setOtpValue] = useState("");

    // const handleOtpState = (data) => {
    //     setOtpValue(data)
    //     setShowErrorOtp(false)
    // }

    // useEffect(() => {
    //     if ("geolocation" in navigator) {
    //         setAllowLocation(false)
    //     } else {
    //         setAllowLocation(true)
    //         navigator.geolocation.getCurrentPosition(function (position) {
    //             setUserLocation({
    //                 lat: position.coords.latitude,
    //                 lng: position.coords.longitude,
    //             })
    //         });
    //     }
    // }, [navigator.geolocation])

    const handleReverseBack = () => {
        router.push("/");
        changeFunc.modalShow(true);
    };

    const [formData, setFormData] = useState({
        number: "",
        name: "",
        email: "",
        pincode: "",
        house: "",
        road: "",
    });

    const { number, pincode, name, email, house, road } = formData;

    const handleOnchange = (e) => {
        setShowErrorNum(false);
        if (e.target.value.length >= 10 && e.target.id === "number") {
            setFormData({
                ...formData,
                [e.target.id]: e.target.value.slice(0, 10),
            });
        } else {
            setFormData({ ...formData, [e.target.id]: e.target.value });
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleLocation = () => {
        setFormData({
            ...formData,
            pincode: "201310",
            house: "D12",
            road: "Pari-Chowk, Greater Noida",
        });
    };

    return (
        <>
            <div className="pb-5 ">
                <h4 className={`${styles.account_head} mt-4`}>
                    Please share your contact details
                </h4>
                <div className={styles.address_head}>
                    <h3>Contact</h3>
                </div>
                <span className={`${styles.mute}`}>
                    Your data is safe. We like spanners & not spammers!
                </span>

                <div className={styles.account_head}>
                    {/* <h3>{origNum}</h3>
                <button onClick={() => moveBack(false)}>change?</button> */}
                    <input
                        type="text"
                        className={`${styles.inputField} ${styles.phone} col-10 mt-4 shadow-sm `}
                        placeholder={userDetails.num}
                        autoComplete="off"
                        value={userDetails.num}
                        id="num"
                        disabled
                    />
                    <button onClick={handleReverseBack} className="col-2">
                        <RiEditFill />
                    </button>
                </div>
                <form onSubmit={handleOnSubmit}>
                    <input
                        type="text"
                        className={`${styles.inputField} ${styles.name} col-12 mx-auto mt-3 shadow-sm `}
                        placeholder="Enter your name"
                        autoComplete="off"
                        value={name}
                        id="name"
                        onChange={handleOnchange}
                        required
                    />

                    <input
                        type="email"
                        className={`${styles.inputField} ${styles.email} col-10 mx-auto mt-3 shadow-sm `}
                        placeholder="Enter your email"
                        autoComplete="off"
                        value={email}
                        id="email"
                        onChange={handleOnchange}
                    />
                    <button
                        type="button"
                        className="btn col-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="*Invoice & Follow-on estimates will be sent on email"
                    >
                        !
                    </button>

                    <input
                        type="text"
                        id="number"
                        className={`${styles.inputField} ${styles.phone} col-10 mx-auto mt-3 shadow-sm `}
                        placeholder="Enter your alternate phone number"
                        autoComplete="off"
                        onChange={handleOnchange}
                        value={number}
                    />
                    <button
                        type="button"
                        className="btn col-2"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=" *Alternate contact is helpful in case they are not reachable at time of service"
                    >
                        !
                    </button>

                    {showErrorNum && (
                        <h4 className={styles.invalid}>
                            Please provide a valid Number.
                        </h4>
                    )}

                    <div className={styles.address_form}>
                        <div className={styles.address_head}>
                            <h3>Address</h3>
                            <button type="button" onClick={handleLocation}>
                                Locate you?
                            </button>
                        </div>
                        {allowLocation && (
                            <h3 className={styles.invalid}>
                                Please allow Location Access
                            </h3>
                        )}
                        <div className="my-4">
                            {/* <Map userAddress={userLocation} /> */}
                        </div>
                        <div className="d-flex align-items-center justify-content-between my-3">
                            <div>
                                <input
                                    type="checkbox"
                                    className={`${styles.input_checkbox} me-2 shadow-sm `}
                                    value={checkboxValue}
                                    checked={checkboxValue}
                                    onChange={() =>
                                        setCheckboxValue(!checkboxValue)
                                    }
                                />
                                <span className={styles.register_font_weight}>
                                    Use this address for booking service
                                </span>
                            </div>
                        </div>
                        {!checkboxValue && (
                            <div>
                                <input
                                    type="text"
                                    className={`${styles.inputField} col-12 mx-auto mt-3 shadow-sm `}
                                    placeholder="Enter your Pincode"
                                    autoComplete="off"
                                    id="pincode"
                                    value={pincode}
                                    onChange={handleOnchange}
                                    required
                                />
                                <div id="pincode" className="form-text">
                                    <span>
                                        Dont know your pincode? Click here to
                                        find your area
                                    </span>
                                </div>
                                {/* <span className={`${styles.mute}`}>Don't know your pincode? Click here to find your area</span> */}
                                <input
                                    type="text"
                                    className={`${styles.inputField} col-12 mx-auto mt-3 shadow-sm `}
                                    placeholder="House/ Flat/ Office No."
                                    autoComplete="off"
                                    id="house"
                                    value={house}
                                    onChange={handleOnchange}
                                    required
                                />
                                <textarea
                                    rows={1}
                                    type="text"
                                    className={`${styles.inputField} col-12 mx-auto mt-3 shadow-sm `}
                                    placeholder="Road Name/ Area/ Colony"
                                    autoComplete="off"
                                    id="road"
                                    value={road}
                                    onChange={handleOnchange}
                                    required
                                />
                            </div>
                        )}
                    </div>
                    <button className={`${styles.signup_btn} mt-3`}>
                        Next
                    </button>
                </form>
            </div>
        </>
    );
};

export default KycDetails;