import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import Profile from "./Settings/Profile";
import EditProfile from "./Settings/EditProfile";

export default function Settings() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ padding: "20px" }}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Profile" value="1" />
              <Tab label="Edit" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Profile />
          </TabPanel>
          <TabPanel value="2">
            <EditProfile />
          </TabPanel>
        </TabContext>
      </Box>
    </Card>
  );
}
