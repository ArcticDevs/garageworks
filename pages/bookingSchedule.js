import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import styles from "../styles/date_and_additional_info.module.css";
import { useRouter } from "next/router";
import { Link } from "@mui/material";
import styles1 from "../styles/login.module.css";
import NavigationButton from "../src/components/NavigationButton";
import useBreakpoints from "../src/cutomHooks/useBreakpoints";

export default function StaticDatePickerDemo() {
  const [value, setValue] = useState(dayjs(new Date()));
  const [timeSlot, setTimeSlot] = useState(0);
  const { isMd, isTm, isSm, isXs } = useBreakpoints();

  const router = useRouter();

  const timeSlots = ["11:00", "14:30", "15:00", "17:30", "18:00"];

  return (
    <div
      className="row d-flex flex-column p-3"
      style={{ backgroundColor: "#e9e7e7", height: "100vh" }}
    >
      <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto">
        <h4 className="text-center my-2 fw-bold">
          Select Preferred Date and Time
        </h4>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            label="Responsive"
            minDate={dayjs(new Date())}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            views={["month", "day"]}
            className="mt-2"
          />
        </LocalizationProvider>
      </div>
      <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto my-1 ">
        <h3 className={`${styles.date_head} my-2`}>slots available </h3>
        <div className="mx-auto d-flex flex-wrap col-10">
          {timeSlots.map((curr, index) => (
            <span
              key={index}
              onClick={() => setTimeSlot(index)}
              className={
                timeSlot === index
                  ? `${styles.timeSlot} ${styles.timeSlot_selected}`
                  : `${styles.timeSlot}`
              }
            >
              {curr}
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-center w-100">
          <button
            style={{ backgroundColor: "#01B9FF" }}
            className={`${styles1.signup_btn} mt-1`}
            onClick={() => router.push("/additionalInfo")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
