import { Stack, Typography, Chip, IconButton } from "@mui/material";
import { formatToMMDDYYYY } from "@/lib/date";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { WorkoutProps } from "@/components/WorkoutList";
import { useHooks } from "./hooks";

export interface DisplayViewProps {
  workout: WorkoutProps;
  onEdit: () => void;
  onDelete: () => void;
}

const DisplayView = ({ workout, onEdit, onDelete }: DisplayViewProps) => {
  const { updatedWorkout } = useHooks({ workout });
  return (
    <>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          {updatedWorkout?.title}
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Stack spacing={3}>
        <Stack>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: "medium" }}>
            Description
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {updatedWorkout?.description}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} flexWrap="wrap" gap={2}>
          <Chip
            icon={<CalendarTodayIcon />}
            label={`Date: ${formatToMMDDYYYY(workout.date)}`}
            variant="outlined"
            color="primary"
          />
          <Chip
            icon={<AccessTimeIcon />}
            label={`${updatedWorkout?.duration} minutes`}
            variant="outlined"
            color="secondary"
          />
          <Chip
            icon={<FitnessCenterIcon />}
            label={`${updatedWorkout?.type}`}
            variant="outlined"
            color="secondary"
          />
        </Stack>

        <Stack>
          <Typography variant="body2" color="text.secondary">
            Workout ID: {updatedWorkout?.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created at: {updatedWorkout?.createdAt && formatToMMDDYYYY(updatedWorkout.createdAt) || '-'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Updated at: {updatedWorkout?.updatedAt && formatToMMDDYYYY(updatedWorkout.updatedAt) || '-'}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default DisplayView;
