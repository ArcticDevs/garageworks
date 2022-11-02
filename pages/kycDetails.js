import { useContext, useEffect, useState } from "react";
import { Context } from "../src/context";
import styles from "../styles/account.module.css";
import { RiEditFill } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";
import NavigationButton from "../src/components/NavigationButton";
import styles1 from "../styles/login.module.css";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PhoneIcon from "@mui/icons-material/Phone";
import GpsNotFixedIcon from "@mui/icons-material/GpsNotFixed";
import HomeIcon from "@mui/icons-material/Home";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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

  const [displayFields, setDisplayFields] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState("");

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

  useEffect(() => {
    if (
      sessionStorage.getItem("locationSet") &&
      sessionStorage.getItem("selectedLocation")
    ) {
      setDisplayFields(sessionStorage.getItem("locationSet"));

      setSelectedAddress(`
        ${JSON.parse(sessionStorage.getItem("selectedLocation")).locality}, ${
        JSON.parse(sessionStorage.getItem("selectedLocation")).city
      }, ${JSON.parse(sessionStorage.getItem("selectedLocation")).pincode}
      `);

      setFormData({
        ...formData,
        pincode: JSON.parse(sessionStorage.getItem("selectedLocation")).pincode,
      });
    }
  }, []);

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
    if (e.target.value.length >= 10 && e.target.name === "number") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value.slice(0, 10),
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleLocation = () => {};

  return (
    <div
      className="row"
      style={{ backgroundColor: "#e9e7e7", height: "100vh" }}
    >
      <div className="mx-auto col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12">
        <h4 className={`${styles.account_head} fw-bold mt-4 mb-4`}>
          Please share your contact details
        </h4>
        <div
          className={`card px-3 pb-1 pt-2 shadow mb-4 ${styles.borderRadius}`}
        >
          <h3 className={`${styles.address_head} fw-bold`}>
            <h3>Contact</h3>{" "}
            <span
              className="badge rounded-pill"
              style={{ backgroundColor: "#bfe8f8", color: "#000" }}
              onClick={() => {
                router.push("/?redirect=kyc");
                changeFunc.modalShow(true);
              }}
            >
              1234567899
            </span>
          </h3>
          <form onSubmit={handleOnSubmit}>
            {/* <input
              type="text"
              className={`${styles.inputField} ${styles.name} ${styles.padding_input} col-12 mx-auto mt-1 shadow-sm `}
              placeholder="Enter your name"
              autoComplete="off"
              value={name}
              id="name"
              onChange={handleOnchange}
              required
            /> */}
            <FormControl variant="standard" className="w-100 mb-2">
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
                placeholder="Enter your name"
                autoComplete="off"
                name="name"
                value={name}
                onChange={handleOnchange}
                className="p-1"
              />
            </FormControl>

            {/* <input
              type="email"
              className={`${styles.inputField} ${styles.email} ${styles.padding_input} col-10 mx-auto mt-3 shadow-sm `}
              placeholder="Enter your email"
              autoComplete="off"
              value={email}
              id="email"
              onChange={handleOnchange}
            /> */}
            <FormControl
              variant="standard"
              className="my-2 d-flex flex-row col-12"
            >
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <LocalPostOfficeIcon />
                  </InputAdornment>
                }
                placeholder="Enter your email"
                autoComplete="off"
                name="email"
                value={email}
                onChange={handleOnchange}
                className="p-1 col-10"
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
            </FormControl>

            {/* <input
              type="text"
              id="number"
              className={`${styles.inputField} ${styles.phone} ${styles.padding_input} col-10 mx-auto mt-3 shadow-sm mb-3`}
              placeholder="Enter your alternate phone number"
              autoComplete="off"
              onChange={handleOnchange}
              value={number}
            /> */}
            <FormControl
              variant="standard"
              className="my-2 d-flex flex-row col-12 mb-3"
            >
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">
                    <PhoneIcon />
                  </InputAdornment>
                }
                placeholder="Enter your alternate phone number"
                autoComplete="off"
                name="number"
                value={number}
                onChange={handleOnchange}
                className="p-1 col-10"
                type="number"
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
            </FormControl>

            {showErrorNum && (
              <h4 className={styles.invalid}>Please provide a valid Number.</h4>
            )}
          </form>
        </div>

        <div
          className={`${styles.address_form} ${
            styles.borderRadius
          } card shadow px-3 pt-2 ${displayFields ? "pb-1" : "pb-3"}`}
        >
          <div
            className={`${styles.address_head} mb-0 d-flex flex-column align-items-start`}
          >
            <h3>Address</h3>
            {selectedAddress !== "" && <span>{selectedAddress}</span>}
          </div>
          {allowLocation && (
            <h3 className={styles.invalid}>Please allow Location Access</h3>
          )}
          <div>{/* <Map userAddress={userLocation} /> */}</div>
          <div>
            {/* <input
              type="text"
              className={`${styles.inputField} ${styles1.input_phone} ${styles.padding_input} col-12 mx-auto mt-1 shadow-sm mb-2`}
              placeholder="Enter your Pincode"
              autoComplete="off"
              id="pincode"
              value={pincode}
              onChange={handleOnchange}
              required
            /> */}
            {/* {displayFields && (
              
            )} */}
            <div><Link href="/locate">
              <span
                id="pincode"
                className={`${styles.mute} d-flex align-items-center justify-content-center flex-column-reverse`}
              >
                <Link href="/locate">
                  <button
                    type="button"
                    onClick={handleLocation}
                    className={`${styles.locate_btn} d-flex align-items-center me-auto my-2 mt-3 ms-1`}
                  >
                    <LocationOnIcon className="mb-1 me-1" /> Click here to add address
                  </button>
                </Link>
              </span>
            </Link></div>
            
            {/* <span className={`${styles.mute}`}>Don't know your pincode? Click here to find your area</span> */}
            {/* <input
              type="text"
              className={`${styles.inputField} ${styles1.input_phone} ${styles.padding_input} col-12 mx-auto mt-3 shadow-sm `}
              placeholder="House/ Flat/ Office No."
              autoComplete="off"
              id="house"
              value={house}
              onChange={handleOnchange}
              required
            /> */}
            
            {/* <textarea
              rows={1}
              type="text"
              className={`${styles.inputField} ${styles1.input_phone} ${styles.padding_input} col-12 mx-auto mt-3 shadow-sm mb-3`}
              placeholder="Road Name/ Area/ Colony"
              autoComplete="off"
              id="road"
              value={road}
              onChange={handleOnchange}
              required
            /> */}
            {displayFields && (
              <div>
              <TextareaAutosize
                type="text"
                aria-label="minimum height"
                minRows={1}
                placeholder="Road Name/ Area/ Colony"
                value={road}
                name="road"
                onChange={handleOnchange}
                className="p-2 col-12 border rounded"
              />
              </div>
            )}
          </div>
        </div>
        <div className={`${styles.mute} mt-3 text-center fw-bold`}>
          Your data is safe. We like spanners & not spammers!
        </div>
        <div className="mb-4">
          <NavigationButton label="Next" navigateTo="/bookingSchedule" />
        </div>
      </div>
    </div>
  );
};

export default KycDetails;
