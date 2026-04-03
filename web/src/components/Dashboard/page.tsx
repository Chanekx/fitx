import { Paper, Stack, SxProps, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

export interface DashboardProps {
  sx?: SxProps;
}

const Dashboard = ({ sx }: DashboardProps) => {
  return (
    <Stack sx={{ flex: 1, p: { xs: 2, sm: 3, md: 4 }, ...sx }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          maxWidth: 720,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
          <TrendingUpIcon color="primary" sx={{ fontSize: 36 }} />
          <Typography variant="h3" component="h1" color="text.primary">
            Welcome to FitTrack
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 520, lineHeight: 1.7 }}>
          Here are the workouts you did this month. Use the sidebar to open your workout list and
          track your progress.
        </Typography>
      </Paper>
    </Stack>
  );
};
export default Dashboard;
