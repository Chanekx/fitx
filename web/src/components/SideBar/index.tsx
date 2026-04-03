import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Image from "next/image";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { SIDEBAR_WIDTH } from "@/theme/theme";

type SideBarProps = {
  activePage: "dashboard" | "workoutList";
  openPage: (page: "dashboard" | "workoutList") => void;
};

const SideBar = ({ activePage, openPage }: SideBarProps) => {
  return (
    <Stack
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1100,
        width: SIDEBAR_WIDTH,
        height: "100vh",
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        boxShadow: "4px 0 24px rgba(15, 23, 42, 0.06)",
      }}
      direction="column"
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{ px: 2, py: 2.5, borderBottom: 1, borderColor: "divider" }}
      >
        <Box sx={{ borderRadius: 1.5, overflow: "hidden", flexShrink: 0 }}>
          <Image alt="FitTrack" src="/FitTrack.png" width={48} height={52} />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Inknut Antiqua", Georgia, serif',
            fontWeight: 600,
            color: "text.primary",
            lineHeight: 1.2,
          }}
        >
          FitTrack
        </Typography>
      </Stack>
      <List sx={{ px: 1.5, py: 2 }} disablePadding>
        <ListItemButton
          selected={activePage === "dashboard"}
          onClick={() => openPage("dashboard")}
          sx={{
            borderRadius: 2,
            mb: 0.5,
            "&.Mui-selected": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": { bgcolor: "primary.dark" },
              "& .MuiListItemIcon-root": { color: "inherit" },
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" primaryTypographyProps={{ fontWeight: 600 }} />
        </ListItemButton>
        <ListItemButton
          selected={activePage === "workoutList"}
          onClick={() => openPage("workoutList")}
          sx={{
            borderRadius: 2,
            "&.Mui-selected": {
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": { bgcolor: "primary.dark" },
              "& .MuiListItemIcon-root": { color: "inherit" },
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <FitnessCenterIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Workout list" primaryTypographyProps={{ fontWeight: 600 }} />
        </ListItemButton>
      </List>
    </Stack>
  );
};

export default SideBar;
