import SideBar from "@/components/SideBar";
import Workouts from "@/components/Workouts";
import { Stack } from "@mui/material";
import Dashboard from "../../components/Dashboard/page";
import { useHooks } from "./hooks";

const Homepage = () => {
  const { activePage, openPage } = useHooks();
  return (
    <Stack
      direction="row"
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <SideBar activePage={activePage} openPage={openPage} />

      <Stack
        direction="column"
        sx={{
          height: "100%",
          marginTop: "auto",
          width: "96%",
          marginLeft: "auto",
        }}
      >
        {activePage === "dashboard" && (
          <Dashboard sx={{ flexGrow: "1", backgroundColor: "#A4CCD9" }} />
        )}
        {activePage === "workoutList" && (
          <Workouts sx={{ flexGrow: "1", backgroundColor: "#A4CCD9" }} />
        )}
      </Stack>
    </Stack>
  );
};
export default Homepage;
