import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import styles from "../styles//date_and_additional_info.module.css";
import Link from "next/link";

export default function StaticDatePickerDemo() {
  const [value, setValue] = useState(dayjs(new Date()));
  const [timeSlot, setTimeSlot] = useState(0);

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
      <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto my-1">
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
      </div>
      <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-10 col-sm-12 col-12 mx-auto d-flex flex-column mt-3">
        <h3 className='text-center mt-2 mb-3'>Additional Information</h3>
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
      </div>
    </div>
  );
}
