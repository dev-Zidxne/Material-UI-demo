import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress color="info" variant="determinate" value={60} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress color="info" variant="determinate" value={60} />
    </Stack>
  );
};

export default MuiProgress;
