import { Stack, SxProps, Typography } from "@mui/material";

export interface DashboardProps {
  sx?: SxProps;
}

const Dashboard = ({ sx }: DashboardProps) => {
  return (
    <Stack sx={{ backgroundColor: "#F5E8C7", flex: "grow", ...sx }}>
      <Stack marginTop={5} spacing={2} direction={"row"} marginLeft={"70px"}>
        <Typography color="black" variant="h3" fontFamily="Inknut Antiqua">
          Welcome to FitTrack
        </Typography>
        <Typography color="black">
        Here are the workouts you did this month!
      </Typography>
      </Stack>    
    </Stack>
  );
};
export default Dashboard;
