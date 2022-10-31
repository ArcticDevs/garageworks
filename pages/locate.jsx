import React from "react";
import styles from "../styles/locate.module.css";

const locate = () => {
  return (
    <div className="row">
      <div className="mx-auto col-xxl-6 col-xl-9 col-lg-8 col-md-10 col-sm-12 col-12">
        <h4 className={`${styles.locate_current} col-xxl-10 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto`}>
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
          <span> Pune - Pune Airport (PNQ)</span>
        </h4>
        <div className="col-xxl-10 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto">
          <h4 className={styles.locate_head}>
            {" "}
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M11,2V4.07C7.38,4.53 4.53,7.38 4.07,11H2V13H4.07C4.53,16.62 7.38,19.47 11,19.93V22H13V19.93C16.62,19.47 19.47,16.62 19.93,13H22V11H19.93C19.47,7.38 16.62,4.53 13,4.07V2M11,6.08V8H13V6.09C15.5,6.5 17.5,8.5 17.92,11H16V13H17.91C17.5,15.5 15.5,17.5 13,17.92V16H11V17.91C8.5,17.5 6.5,15.5 6.08,13H8V11H6.09C6.5,8.5 8.5,6.5 11,6.08M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11Z"
              />
            </svg>
            <span>Current Location</span>{" "}
          </h4>
          <hr />
          <h4 className={styles.locate_head}>
            {" "}
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"
              />
            </svg>
            <span>Select Location on Map</span>{" "}
          </h4>{" "}
        </div>
        <div className="col-xxl-8 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto">
          <h2 className={styles.locate_suggestions}>Recently Searched Locations</h2>
          <h4 className={styles.locate_head}>
            {" "}
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z"
              />
            </svg>
            <span>Parking lot no.2, Pune Airport</span>{" "}
          </h4>
          <hr />
          <h4 className={styles.locate_head}>
            {" "}
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z"
              />
            </svg>
            <span>Parking lot no.2, Pune Airport</span>{" "}
          </h4>
        </div>
        <div className="col-xxl-10 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto">
          <h2 className={styles.locate_suggestions}>Suggested Pickup Locations</h2>
          <h4 className={styles.locate_head}>
            {" "}
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z"
              />
            </svg>
            <span>Parking lot no.2, Pune Airport</span>{" "}
          </h4>{" "}
          <hr />
          <h4 className={styles.locate_head}>
            {" "}
            <svg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 4C14.2 4 16 5.8 16 8C16 10.1 13.9 13.5 12 15.9C10.1 13.4 8 10.1 8 8C8 5.8 9.8 4 12 4M12 2C8.7 2 6 4.7 6 8C6 12.5 12 19 12 19S18 12.4 18 8C18 4.7 15.3 2 12 2M12 6C10.9 6 10 6.9 10 8S10.9 10 12 10 14 9.1 14 8 13.1 6 12 6M20 19C20 21.2 16.4 23 12 23S4 21.2 4 19C4 17.7 5.2 16.6 7.1 15.8L7.7 16.7C6.7 17.2 6 17.8 6 18.5C6 19.9 8.7 21 12 21S18 19.9 18 18.5C18 17.8 17.3 17.2 16.2 16.7L16.8 15.8C18.8 16.6 20 17.7 20 19Z"
              />
            </svg>
            <span>Parking lot no.2, Pune Airport</span>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default locate;
