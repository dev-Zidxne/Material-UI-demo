import React from "react";

import { Stack } from "@mui/system";
import { TextField } from "@mui/material";

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row">
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
    </Stack>
  );
};
