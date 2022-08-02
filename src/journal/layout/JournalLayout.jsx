import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={240} />
      <SideBar drawerWidth={240} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
