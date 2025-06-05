import { IconButton, Stack, Typography } from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Image from "next/image";
import DashboardIcon from "@mui/icons-material/Dashboard";

type SideBarProps = {
  activePage: "dashboard" | "workoutList";
  openPage: (page: "dashboard" | "workoutList") => void;
};

const SideBar = ({ openPage }: SideBarProps) => {
  return (
    <Stack
      position="absolute"
      sx={{
        width: "6%",
        height: "100vh",
        backgroundColor: "#F6ECA9",
      }}
      direction={"column"}
    >
      <Stack
        direction="row"
        sx={{
          left: 0,
          alignItems: "start",
          paddingTop: "3px",
          width: "100%",
          alignContent: "center",
        }}
      >
        <Image alt="FitTrack" src={"/FitTrack.png"} width={55} height={60} />
        <Typography variant="h6" color="black" marginTop="8px" fontFamily="Inknut Antiqua">
          FitTrack
        </Typography>
      </Stack>
      <IconButton
        sx={{ marginTop: "15px" }}
        onClick={() => openPage("dashboard")}
      >
        <DashboardIcon /> <Typography> Dashboard</Typography>
      </IconButton>
      <IconButton
        sx={{ marginTop: "15px" }}
        onClick={() => openPage("workoutList")}
      >
        <FitnessCenterIcon /> <Typography> Workout List</Typography>
      </IconButton>
    </Stack>
  );
};

export default SideBar;
