import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemIcon>
            <ListItemText primary="List Item 1" secondary="Secondary Text" />
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="List Item 2" secondary="Secondary Text" />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="List Item 3" secondary="Secondary Text" />
        </ListItem>
        <Divider />
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemIcon>
          <ListItemText primary="List Item 4" secondary="Secondary Text" />
        </ListItem>
      </List>
    </Box>
  );
};

export default MuiList;
