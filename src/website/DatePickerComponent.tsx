import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface BasicDatePickerProps {
  value: string;
  onChange: (date: string) => void;
}

export default function BasicDatePicker({
  value,
  onChange,
}: BasicDatePickerProps) {
  const handleChange = (date: dayjs.Dayjs | null) => {
    onChange(date ? date.format("YYYY-MM-DD") : "");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Enter Deadline"
          className="outline-none"
          value={value ? dayjs(value) : null}
          onChange={handleChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
