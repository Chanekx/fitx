import {
  Button,
  InputAdornment,
  Paper,
  Stack,
  SxProps,
  TextField,
} from "@mui/material";
import AddWorkout from "../AddWorkout";
import { useHooks } from "./hooks";
import WorkoutList from "../WorkoutList";
import CustomButton from "@/Parts/Buttons/customButton";
import SearchIcon from "@mui/icons-material/Search";

export type WorkoutsProps = {
  sx?: SxProps;
};

const Workouts = ({ sx }: WorkoutsProps) => {
  const { open, setOpen } = useHooks();
  return (
    <>
      <Stack sx={{ flex: 1, p: { xs: 2, sm: 3, md: 4 }, gap: 3, ...sx }}>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 2,
            border: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", sm: "center" }}
          >
            <TextField
              placeholder="Search workouts…"
              size="small"
              fullWidth
              sx={{ maxWidth: { sm: 480 } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "text.disabled", fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="outlined" color="primary" sx={{ minWidth: 120 }}>
              Search
            </Button>
            <CustomButton buttonUse="submit" variant="contained" onClick={() => setOpen(true)}>
              Add workout
            </CustomButton>
          </Stack>
        </Paper>
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            minHeight: 400,
            p: 2,
            borderRadius: 2,
            border: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <WorkoutList />
        </Paper>
      </Stack>
      <AddWorkout open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default Workouts;
