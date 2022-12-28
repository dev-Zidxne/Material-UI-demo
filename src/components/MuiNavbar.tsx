import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemon from "@mui/icons-material/CatchingPokemon";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { useState } from "react";

const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PokemonApp
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-control={open ? "resources-menu" : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{ "aria-labelledby": "resources-button" }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcasts</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
