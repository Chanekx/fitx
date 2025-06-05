import { Box, Modal, Typography } from "@mui/material";
import { WorkoutProps } from "../WorkoutList";

interface EditWorkoutProps {
  open: boolean;
  handleClose: () => void;
  workout: WorkoutProps;
}
const EditWorkout = ({ open, handleClose }: EditWorkoutProps) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box>
          <Typography variant="h1" component="h2">
            Edit
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
export default EditWorkout;
