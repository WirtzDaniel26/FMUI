import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const DateComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Initial selected date state

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePicker
      label="Select Date"
      value={selectedDate}
      onChange={handleDateChange}
      minDate={new Date("2024-01-01")} // Set your minimum date
      maxDate={new Date("2024-12-31")} // Set your maximum date
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default DateComponent;
