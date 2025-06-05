import { workoutApi } from "@/services/apiService";
import { useEffect, useState } from "react";
import { WorkoutProps } from ".";
import { useSnackbarContext } from "@/context/SnackbarContext";

export const useHooks = () => {
  const [workouts, setWorkouts] = useState<WorkoutProps[]>();
  const { showError } = useSnackbarContext();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutProps>();

  const fetchWorkouts = async () => {
    try {
      const data = await workoutApi.getAll();
      setWorkouts(data);
    } catch {
      showError("Error displaying workout");
    }
  };

  const displayWorkouts = workouts?.filter((workout) => !workout.deletedAt);

  useEffect(() => {
    fetchWorkouts();
  });

  const handleWorkoutClick = (workout: WorkoutProps) => {
    setSelectedWorkout(workout);
    setOpenDrawer(true);
  };

  return {
    handleWorkoutClick,
    workouts,
    openDrawer,
    selectedWorkout,
    setOpenDrawer,
    displayWorkouts,
  };
};
