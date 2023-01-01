import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            aria-label="Tabs example"
            onChange={handleChange}
            textColor="secondary"
            centered
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab
              label="Tab One"
              value="1"
              icon={<FavoriteIcon />}
              iconPosition="start"
            ></Tab>
            <Tab label="Tab Two" value="2" disabled></Tab>
            <Tab label="Tab Three" value="3"></Tab>
            <Tab label="Tab Four" value="4" disabled></Tab>
            <Tab label="Tab Five" value="5"></Tab>
            <Tab label="Tab Six" value="6" disabled></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">Panel1 one</TabPanel>
        <TabPanel value="2">Panel2 two</TabPanel>
        <TabPanel value="3">Panel3 three</TabPanel>
        <TabPanel value="4">Panel4 four</TabPanel>
        <TabPanel value="5">Panel5 five</TabPanel>
        <TabPanel value="6">Panel6 six</TabPanel>
      </TabContext>
    </Box>
  );
};
