import { Button, Stack, SxProps, TextField } from "@mui/material";
import AddWorkout from "../AddWorkout";
import { useHooks } from "./hooks";
import WorkoutList from "../WorkoutList";
import CustomButton from "@/Parts/Buttons/customButton";

export type WorkoutsProps = {
  sx?: SxProps;
};

const Workouts = ({ sx }: WorkoutsProps) => {
  const { open, setOpen } = useHooks();
  return (
    <>
      <Stack sx={{ backgroundColor: "#F5E8C7", flex: "grow", ...sx }}>
        <Stack marginTop={5} spacing={2} direction={"row"} marginLeft={"70px"}>
          <TextField sx={{ width: "60%" }}></TextField>
          <Button
            variant="contained"
            sx={{
              width: { xs: "auto", md: "150px" },
            }}
          >
            Search
          </Button>
          <CustomButton
            buttonUse="submit"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Add a workout
          </CustomButton>
        </Stack>
        <Stack sx={{ marginLeft: "70px", marginTop: "20px" }}>
          <WorkoutList />
        </Stack>
      </Stack>
      <AddWorkout open={open} handleClose={() => setOpen(false)} />
    </>
  );
};
export default Workouts;
