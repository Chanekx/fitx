import { workoutApi } from "@/services/apiService";
import { DeleteWorkoutProps } from ".";
import { useSnackbarContext } from "@/context/SnackbarContext";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface UseHooksParams
  extends Pick<DeleteWorkoutProps, "handleClose" | "workout"> {}

export const useHooks = ({ handleClose, workout }: UseHooksParams) => {
  const { showSuccess, showError } = useSnackbarContext();
  const handleDeleteWorkout = async () => {
    try {
      await workoutApi.delete(workout?.id);
      showSuccess("WORKOUT DELETED");
    } catch {
      showError("Error occured, not able to delete workout");
    }
    handleClose();
  };
  return {
    handleDeleteWorkout,
  };
};
