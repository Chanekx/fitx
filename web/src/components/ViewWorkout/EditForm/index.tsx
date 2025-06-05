import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { WORKOUT_TYPE } from "@/Constants/workoutType";
import { WorkoutProps } from "../../WorkoutList";
import { Controller } from "react-hook-form";
import { useHooks } from "./hooks";
import CustomButton from "@/Parts/Buttons/customButton";

export interface EditFormProps {
  workout: WorkoutProps;
  onCancel: () => void;
}

const EditForm = ({ workout, onCancel }: EditFormProps) => {
  const { control, handleSubmit, errors, onSubmit } = useHooks({
    workout,
    onCancel,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Title"
              defaultValue={workout.title}
              error={!!errors.title}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              multiline
              rows={4}
              label="Description"
              error={!!errors.description}
              defaultValue={workout.description}
            />
          )}
        />

        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Date"
                value={field.value}
                onChange={field.onChange}
                slotProps={{
                  textField: {
                    error: !!errors.date,
                  },
                }}
              />
            )}
          />

          <Controller
            name="duration"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                label="Duration (minutes)"
                error={!!errors.duration}
                helperText={errors.duration?.message}
                defaultValue={workout.duration}
                sx={{ width: 150 }}
              />
            )}
          />

          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <FormControl sx={{ minWidth: 150 }} error={!!errors.type}>
                <InputLabel>Type</InputLabel>
                <Select {...field} label="Type">
                  {Object.values(WORKOUT_TYPE).map((type) => (
                    <MenuItem
                      key={type}
                      value={type}
                      defaultValue={workout.type}
                    >
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <CustomButton buttonUse="cancel" onClick={onCancel}>
            Cancel
          </CustomButton>
          <CustomButton buttonUse="submit" type="submit">
            Save Changes
          </CustomButton>
        </Stack>
      </Stack>
    </form>
  );
};

export default EditForm;
