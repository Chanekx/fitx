import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import InputField from "../InputField";
import { useHooks } from "./hooks";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { WORKOUT_TYPE } from "@/Constants/workoutType";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "@/Parts/Buttons/customButton";

export interface WorkoutsProps {
  open: boolean;
  handleClose: () => void;
}

const AddWorkoutDialog = ({ open, handleClose }: WorkoutsProps) => {
  const { control, createWorkout, isValid, isSubmitting, handleResetandClose } =
    useHooks({ handleClose });

  return (
    <Modal open={open} onClose={handleClose}>
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "92%", sm: "80%", md: "min(560px, 90vw)" },
          maxHeight: "90vh",
          overflow: "auto",
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.25)",
          border: 1,
          borderColor: "divider",
          p: 4,
        }}
      >
        <Button
          onClick={handleResetandClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            minWidth: 40,
            color: "text.secondary",
          }}
        >
          <CloseIcon />
        </Button>
        <form onSubmit={createWorkout}>
          <Stack
            spacing={1.5}
            paddingTop={2}
            justifyContent="center"
            alignItems="stretch"
          >
            <Typography variant="h4" color="text.primary" sx={{ mb: 1, textAlign: "center" }}>
              Add a workout
            </Typography>
            <InputField
              control={control}
              name="title"
              label="Title"
              required
            ></InputField>
            <InputField
              control={control}
              name="description"
              label="Description"
            ></InputField>
            <Controller
              name="date"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  label="Date of the workout"
                  value={value}
                  onChange={onChange}
                  sx={{ paddingBottom: "10px", width: "100%" }}
                  slotProps={{
                    textField: { variant: "outlined", required: true },
                  }}
                />
              )}
            />

            <InputField
              control={control}
              name="duration"
              label="Length of workout(1-300 Minutes)"
              type="number"
              required
            ></InputField>

            <Controller
              name="type"
              control={control}
              defaultValue={WORKOUT_TYPE.CARDIO}
              render={({ field }) => (
                <FormControl fullWidth variant="outlined" required>
                  <InputLabel>Workout Type</InputLabel>
                  <Select label="Workout Type" {...field}>
                    {Object.values(WORKOUT_TYPE).map((workoutType) => (
                      <MenuItem key={workoutType} value={workoutType}>
                        {workoutType}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
            <CustomButton
              type="submit"
              buttonUse="submit"
              variant="contained"
              disabled={isSubmitting || !isValid}
              sx={{ width: 1 }}
            >
              CREATE WORKOUT
            </CustomButton>
          </Stack>
        </form>
      </Stack>
    </Modal>
  );
};
export default AddWorkoutDialog;
