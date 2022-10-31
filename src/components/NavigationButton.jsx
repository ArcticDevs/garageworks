import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/account.module.css";
import useBreakpoints from '../cutomHooks/useBreakpoints'

const NavigationButton = ({
  label = "Next",
  bgcolor = "#1032b5",
  navigateTo = "/",
}) => {
  const router = useRouter();
  const {isMd,isTm,isSm,isXs} = useBreakpoints();
  return (
    <div className="row">
      <div
        className="mx-auto"
        style={(isMd || isTm || isSm || isXs) ? {position:'absolute',bottom:'10px'} : null}
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
