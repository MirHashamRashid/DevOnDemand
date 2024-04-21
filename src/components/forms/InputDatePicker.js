import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import * as React from "react";

export default function InputDatePicker({label, handleChange, value}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label={label || "Date"}
          inputFormat="MM/dd/yyyy"
          value={new Date(value || "2022-08-18T21:11:54")}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params}  />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
