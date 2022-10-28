import React from "react";
import styles from "../styles/search.module.css";
import styles1 from "../styles/account.module.css";
import { useState } from "react";

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
  const [commonSpares, setCommonSpares] = useState(spares);
  const [selectedSpares, setSelectedSpares] = useState([]);

  const handleSelectingSpares = (selected) => {
    const tempArr1 = commonSpares;
    tempArr1 = tempArr1.map((curr) => curr !== selected ? curr : null )

    const tempArr2 = selectedSpares;
    tempArr2.push(selected);

    setCommonSpares(tempArr1);
    setSelectedSpares(tempArr2);
  };

  return (
    <div className="row d-flex flex-column">
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
      <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto mt-3">
        <h5 className={styles.common_text}>Most Common spares in Pulsar 180</h5>
        <div className={`d-flex flex-wrap mt-3 ${styles.commonSpares}`}>
          {commonSpares.map((curr, index) => (
            curr && <div
              key={index}
              onClick={() => handleSelectingSpares(curr)}
              className={`${styles.searchBlob}`}
            >
              {curr}
            </div>
          ))}
        </div>
      </div>
      <div className="col-xxl-5 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto mt-3">
        <h5 className={styles.common_text}>
          You have selected following spares :
        </h5>
        <div className={`d-flex flex-wrap mt-3 ${styles.commonSpares}`}>
          {selectedSpares.length > 0 ? (
            selectedSpares.map((curr, index) => (
              <div
                key={index}                
                className={`${styles.searchBlob}`}
              >
                {curr}
              </div>
            ))
          ) : (
            <h5 className="text-center mx-auto">No Spares Selected</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
