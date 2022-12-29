import React from "react";
import { Chip, Stack } from "@mui/material";

const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" />
    </Stack>
  );
};

export default MuiChip;
