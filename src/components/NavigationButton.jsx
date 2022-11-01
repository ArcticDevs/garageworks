import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/account.module.css";
import useBreakpoints from '../cutomHooks/useBreakpoints'

const NavigationButton = ({
  label = "Next",
  bgcolor = "#01B9FF",
  navigateTo = "/",
}) => {
  const router = useRouter();
  const {isMd,isTm,isSm,isXs} = useBreakpoints();
  return (
    <div className="row d-flex justify-content-center w-100 mx-auto">
      <div
        className="mx-auto"
      >
        <button
          className={`${styles.signup_btn} mt-3 w-100`}
          style={{ backgroundColor: bgcolor }}
          onClick={() => router.push(navigateTo)}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default NavigationButton;
