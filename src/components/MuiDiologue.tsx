import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

const MuiDiologue = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open Diolog</Button>
      <Dialog
        open={open}
        aria-labelledby="diolog-title"
        aria-describedby="diolog-description"
      >
        <DialogTitle id="diolog-title">Submit the test</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want ot submit test? You will not be able to edit
            after submitting
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MuiDiologue;
