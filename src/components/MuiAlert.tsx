import React from "react";
import { Stack, Alert } from "@mui/material";

const MuiAlert = () => {
  return (
    <Stack>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="info">This is a info alert</Alert>
      <Alert severity="success">This a success alert</Alert>
    </Stack>
  );
};

export default MuiAlert;
