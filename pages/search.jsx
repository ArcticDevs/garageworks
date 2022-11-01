import React, { useEffect } from "react";
import styles from "../styles/search.module.css";
import styles1 from "../styles/account.module.css";
import styles2 from "../styles/login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { Link } from "@mui/material";
import NavigationButton from "../src/components/NavigationButton";

const Search = () => {
  const spares = [
    "Brake Liner (Rear)",
    "Mirror (LH)",
    "Mirror (RH)",
    "HL Bulb",
    "Accelerator Cable",
    "Brake Liner (Front)",
    "Lock Set",
  ];

  const router = useRouter();

  const [commonSpares, setCommonSpares] = useState(spares);
  const [selectedSpares, setSelectedSpares] = useState([]);

  const handleSelectingSpares = (selected) => {
    const tempArr1 = commonSpares;
    tempArr1 = tempArr1.filter((curr) => curr !== selected);

    const tempArr2 = selectedSpares;
    tempArr2.push(selected);

    setCommonSpares(tempArr1);
    setSelectedSpares(tempArr2);

    localStorage.setItem("commonSpares", JSON.stringify(tempArr1));
    localStorage.setItem("selectedSpares", JSON.stringify(tempArr2));
  };

  const handleRemovingSpares = (selected) => {
    const tempArr1 = selectedSpares;
    tempArr1 = tempArr1.filter((curr) => curr !== selected);

    const tempArr2 = commonSpares;
    tempArr2.push(selected);

    setCommonSpares(tempArr2);
    setSelectedSpares(tempArr1);

    localStorage.setItem("commonSpares", JSON.stringify(tempArr2));
    localStorage.setItem("selectedSpares", JSON.stringify(tempArr1));
  };

  useEffect(() => {
    if (
      localStorage.getItem("selectedSpares") &&
      localStorage.getItem("commonSpares")
    ) {
      setSelectedSpares(JSON.parse(localStorage.getItem("selectedSpares")));
      setCommonSpares(JSON.parse(localStorage.getItem("commonSpares")));
    }
  }, []);

  const saveSelected = () => {
    localStorage.setItem("selectedSpares", JSON.stringify(selectedSpares));
  };

  return (
    <div className="row d-flex flex-column mx-auto" >
      <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto">
        <input
          type="text"
          className={`${styles1.inputField} ${styles.search} col-12 mx-auto mt-3 shadow-sm mb-2`}
          placeholder="Search spares"
          autoComplete="off"
          list="spares"
        />
        <datalist id="spares">
          {spares.map((curr, index) => (
            <option value={curr} key={index} className="col-12" />
          ))}
        </datalist>
      </div>
      <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto my-3">
        <h3 className={styles.common_text}>Most Common spares in Pulsar 180</h3>
        <div className={`d-flex flex-wrap mt-3 ${styles.commonSpares}`}>
          {commonSpares.map(
            (curr, index) =>
              curr && (
                <div
                  key={index}
                  onClick={() => handleSelectingSpares(curr)}
                  className={`${styles.searchBlob}`}
                >
                  {curr}
                </div>
              )
          )}
        </div>
      </div>
      <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto my-3">
        <h3 className={`${styles.common_text}`}>
          You have selected following spares :
        </h3>
        <div className={`d-flex flex-wrap mt-3 ${styles.commonSpares}`}>
          {selectedSpares.length > 0 ? (
            selectedSpares.map(
              (curr, index) =>
                curr && (
                  <div
                    key={index}
                    className={`${styles.searchBlob} ${styles.selectedBlob}`}
                    onClick={() => handleRemovingSpares(curr)}
                  >
                    {curr}
                    <svg className={styles.removeCross} viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
                      />
                    </svg>
                  </div>
                )
            )
          ) : (
            <h5 className="text-center mx-auto">No Spares Selected</h5>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-center w-100">
        <button
          style={{ backgroundColor: "#01B9FF" }}
          className={`${styles2.signup_btn} mt-1`}
          onClick={() => router.push("/cart")}
        >
          Cart Page
        </button>
      </div>
    </div>
  );
};

export default Search;
