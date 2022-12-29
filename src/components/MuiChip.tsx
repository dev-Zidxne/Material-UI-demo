import React from "react";
import { Chip, Stack } from "@mui/material";

const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" />
      <Chip
        label="Chip Outlined"
        color="primary"
        size="small"
        variant="outlined"
      />
    </Stack>
  );
};

export default MuiChip;
