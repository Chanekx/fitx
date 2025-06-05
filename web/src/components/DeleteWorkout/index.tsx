import {Modal, Stack, Typography } from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useHooks } from "./hooks";
import { WorkoutProps } from "../WorkoutList";
import CustomButton from "@/Parts/Buttons/customButton";

export interface DeleteWorkoutProps {
  open: boolean;
  handleClose: () => void;
  workout: WorkoutProps;
}

const DeleteWorkout = ({ open, handleClose, workout }: DeleteWorkoutProps) => {
  const { handleDeleteWorkout } = useHooks({ handleClose, workout });
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            minHeight: "100vh",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "#FFEDDB",
              height: "50vh",
              alignItems: "center",
              width: "80vh",
              borderRadius: "100px",
              justifyContent: "center",
            }}
          >
            <DeleteForeverIcon
              sx={{ height: "10vh", width: "20vh", color: "#FF3434" }}
            />
            <Typography variant="h4" color="black">
              Are you sure you want to delete this workout?
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={5}
              height="50px"
              width="100%"
              marginTop={10}
            >
              <CustomButton
                buttonUse="delete"
                onClick={handleDeleteWorkout}
                sx={{
                  color: "white",
                  borderRadius: "50px",
                  width: "200px",
                }}
              >
                VERY SURE
              </CustomButton>
              <CustomButton
                buttonUse="cancel"
                onClick={handleClose}
                sx={{
                  color: "white",
                  borderRadius: "50px",
                  width: "200px",
                }}
              >
                CANCEL
              </CustomButton>
            </Stack>
          </Stack>
        </Stack>
      </Modal>
    </>
  );
};
export default DeleteWorkout;
