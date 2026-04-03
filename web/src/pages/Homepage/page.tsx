import SideBar from "@/components/SideBar";
import Workouts from "@/components/Workouts";
import { Box, Stack } from "@mui/material";
import Dashboard from "../../components/Dashboard/page";
import { useHooks } from "./hooks";
import { SIDEBAR_WIDTH } from "@/theme/theme";

const Homepage = () => {
  const { activePage, openPage } = useHooks();
  return (
    <Stack
      direction="row"
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "background.default",
      }}
    >
      <SideBar activePage={activePage} openPage={openPage} />

      <Box
        component="main"
        sx={{
          flex: 1,
          minWidth: 0,
          ml: `${SIDEBAR_WIDTH}px`,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {activePage === "dashboard" && <Dashboard sx={{ flex: 1 }} />}
        {activePage === "workoutList" && <Workouts sx={{ flex: 1 }} />}
      </Box>
    </Stack>
  );
};
export default Homepage;
