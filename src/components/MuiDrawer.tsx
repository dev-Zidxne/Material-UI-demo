import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const MuiDrawer = () => {
  const [isDrawOpen, setIsDrawOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => {
          setIsDrawOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawOpen}
        onClose={() => setIsDrawOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
