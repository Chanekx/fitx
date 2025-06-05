import { useEffect, useState } from "react";

import { workoutApi } from "@/services/apiService";
import { WorkoutProps } from "@/components/WorkoutList";

interface UseHooksParams {
  workout: WorkoutProps;
}

export const useHooks = ({ workout }: UseHooksParams) => {
  const workoutId = workout.id;

  const [updatedWorkout, setUpdatedWorkout] = useState<
    WorkoutProps | undefined
  >();

  const fetchWorkout = async (workoutId: string) => {
    try {
      const workout = await workoutApi.getOne(workoutId);

      setUpdatedWorkout(workout.data);
    } catch {}
  };

  useEffect(() => {
    fetchWorkout(workoutId);
  }, [workoutId]);

  return { updatedWorkout };
};
