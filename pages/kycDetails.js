import { useContext, useState } from "react";
import { Context } from "../src/context";
import styles from "../styles/account.module.css";
import { RiEditFill } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";
import NavigationButton from "../src/components/NavigationButton";
import styles1 from '../styles/login.module.css'

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
    pincode: "382007",
    house: "Parking lot no.2",
    road: "Pune Airport Road",
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
    <div className="row">
      <div className="mx-auto col-xxl-6 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12">
        <h4 className={`${styles.account_head} fw-bold mt-4 mb-4`}>
          Please share your contact details
        </h4>
        <div className={`card px-3 pb-1 pt-2 shadow mb-4 ${styles.borderRadius}`} >
            <h3 className={styles.address_head}>Contact <span class="badge rounded-pill" style={{backgroundColor:'#bfe8f8',color:'#000'}} onClick={() => {router.push('/?redirect=kyc');changeFunc.modalShow(true);}}>1234567899</span></h3>
          <div className={`${styles.mute} my-3`}>
            Your data is safe. We like spanners & not spammers!
          </div>
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              className={`${styles.inputField} ${styles.name} ${styles.padding_input} col-12 mx-auto mt-1 shadow-sm `}
              placeholder="Enter your name"
              autoComplete="off"
              value={name}
              id="name"
              onChange={handleOnchange}
              required
            />

            <input
              type="email"
              className={`${styles.inputField} ${styles.email} ${styles.padding_input} col-10 mx-auto mt-3 shadow-sm `}
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
              className={`${styles.inputField} ${styles.phone} ${styles.padding_input} col-10 mx-auto mt-3 shadow-sm mb-3`}
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
              <h4 className={styles.invalid}>Please provide a valid Number.</h4>
            )}
          </form>
        </div>

        <div className={`${styles.address_form} ${styles.borderRadius} card shadow px-3 pb-1 pt-2`} >
          <div className={`${styles.address_head} mb-2`}>
            <h3>Address</h3>
            <Link href="/locate">
              <button type="button" onClick={handleLocation}>
                Locate you?
              </button>
            </Link>
          </div>
          {allowLocation && (
            <h3 className={styles.invalid}>Please allow Location Access</h3>
          )}
          <div>{/* <Map userAddress={userLocation} /> */}</div>
          <div>
            <input
              type="text"
              className={`${styles.inputField} ${styles1.input_phone} ${styles.padding_input} col-12 mx-auto mt-1 shadow-sm mb-2`}
              placeholder="Enter your Pincode"
              autoComplete="off"
              id="pincode"
              value={pincode}
              onChange={handleOnchange}
              required
            />
            <Link href="/locate">
              <span id="pincode" className={`${styles.mute}`}>
                Dont know your pincode? Click here to find your area
              </span>
            </Link>
            {/* <span className={`${styles.mute}`}>Don't know your pincode? Click here to find your area</span> */}
            <input
              type="text"
              className={`${styles.inputField} ${styles1.input_phone} ${styles.padding_input} col-12 mx-auto mt-3 shadow-sm `}
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
              className={`${styles.inputField} ${styles1.input_phone} ${styles.padding_input} col-12 mx-auto mt-3 shadow-sm mb-3`}
              placeholder="Road Name/ Area/ Colony"
              autoComplete="off"
              id="road"
              value={road}
              onChange={handleOnchange}
              required
            />
          </div>
        </div>
        <div className='mb-4'>

        <NavigationButton label="Next" navigateTo="/bookingSchedule"/>
        </div>
      </div>
    </div>
  );
};

export default KycDetails;
