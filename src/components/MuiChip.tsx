import React from "react";
import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="Chip Outlined"
        color="primary"
        size="small"
        variant="outlined"
        avatar={<Avatar />}
      />
      <Chip
        label="Click"
        color="success"
        onClick={() => {
          alert("Clicked!");
        }}
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => {
          alert("Clicked!");
        }}
        onDelete={() => {
          alert("Delete Handler Called");
        }}
      />
    </Stack>
  );
};

export default MuiChip;
