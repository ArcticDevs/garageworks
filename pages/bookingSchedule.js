import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

import styles from "../styles/date_and_additional_info.module.css";
import {useRouter} from "next/router";
import { Link } from "@mui/material";
import styles1 from '../styles/login.module.css'

export default function StaticDatePickerDemo() {
  const [value, setValue] = useState(dayjs(new Date()));
  const [timeSlot, setTimeSlot] = useState(0);

  const router = useRouter()

  const timeSlots = [
    "11:00",
    "14:30",
    "15:00",
    "17:30",
    "18:00",
    "18:30",
    "19:30",
    "21:00",
  ];

  return (
    <div className="row d-flex flex-column ml-3" style={{ maxWidth: "100%", overflow: "hidden" ,marginLeft:"-2px" }}>
      <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto">
        <h3 className="text-center mb-2">Select Preferred Date and Time</h3>
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
          />
        </LocalizationProvider>
      </div>
      <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto my-1 ">
        <h3 className={`${styles.date_head}`}>slots available </h3>
        <div className="mx-auto d-flex flex-wrap">
          {timeSlots.map((curr, index) => (
            <div
              key={index}
              onClick={() => setTimeSlot(index)}
              className={
                timeSlot === index
                  ? `${styles.timeSlot} ${styles.timeSlot_selected}`
                  : `${styles.timeSlot}`
              }
            >
              {curr}
            </div>
          ))}
        </div>
        <button className={`${styles1.signup_btn} mt-3 w-100`}>
            <Link href="/additionalInfo">Next</Link>
        </button>   
      </div>   
    </div>
  );
}
