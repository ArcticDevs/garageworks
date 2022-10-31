import { Link } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import styles from "../styles/date_and_additional_info.module.css";
import { useRouter } from "next/router";
import NavigationButton from "../src/components/NavigationButton";

const AdditionalInfo = () => {
  return (
    <div className="row">
      <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto d-flex flex-column mt-3">
        <h4 className="text-center mt-2 mb-3">Additional Information</h4>
        <Link href="/search">
          <div className={styles.info_card}>
            <h5>Do you have any complaints?</h5>
            <span>
              Click here if you have any complaints (Eg. Horn not working,
              Acceleration hard)
            </span>
          </div>
        </Link>
        <Link href="/search">
          <div className={styles.info_card}>
            <h5>Do you have any additional spares requirement?</h5>
            <span>
              Click here if you have any additional spares part replacement (Eg.
              Spark plug, Horn)
            </span>
          </div>
        </Link>
        <Link href="/search">
          <div className={styles.info_card}>
            <h5>Do you need any additional labour work done?</h5>
            <span>
              Click here if you have any additional labour work (Eg. Wheel
              greasing, bike wash)
            </span>
          </div>
        </Link>

        <NavigationButton label="Next" bgcolor="#1032b5" navigateTo="/cart" />
      </div>
    </div>
  );
};

export default AdditionalInfo;
