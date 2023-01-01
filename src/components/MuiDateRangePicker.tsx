import React, { useState } from "react";
import { Box, TextField, TextFieldProps } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/lab";

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log(value);
  return (
    <Box width="500px">
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={value}
        onChange={(newValue: DateRange<Date>) => {
          setValue(newValue);
        }}
        renderInput={(startProps: TextFieldProps, endProps: TextFieldProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>to</Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  );
};
