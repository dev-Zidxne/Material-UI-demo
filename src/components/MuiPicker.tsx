import React from "react";
import { Stack, TextField } from "@mui/material";
import { DatePicker } from "@mui/lab";
import { useState } from "react";
import { TextFieldProps } from "@mui/material/TextField";

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  console.log({ selectedDate });
  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
          <TextField {...params} />
        )}
        value={selectedDate}
        onChange={(newValue: React.SetStateAction<Date | null>) => {
          setSelectedDate(newValue);
        }}
      />
    </Stack>
  );
};
