import { WorkoutProps } from "@/components/WorkoutList";
import { WORKOUT_TYPE } from "@/Constants/workoutType";
import yup from "@/lib/yup";
import { workoutApi } from "@/services/apiService";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { EditFormProps } from ".";
import { useSnackbarContext } from "@/context/SnackbarContext";

const schema = yup.object().shape({
  title: yup.string().optional(),
  description: yup.string().optional(),
  date: yup.date().optional(),
  duration: yup.number().optional().max(300).min(1),
  type: yup.string().optional().oneOf(Object.values(WORKOUT_TYPE)),
});

type FormValues = yup.InferType<typeof schema>;

export const useHooks = ({ workout, onCancel }: EditFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const { showSuccess, showError } = useSnackbarContext();

  const workoutId: string = workout.id;

  const onSubmit = async (data: Partial<WorkoutProps>) => {
    try {
      await workoutApi.update(workoutId, {
        title: data.title,
        description: data.description,
        date: data.date,
        duration: data.duration,
        type: data.type,
      });
      showSuccess("Successfully edited workout");
      onCancel();
    } catch {
      showError("Something went wrong with workout editing");
    }
  };

  return { control, handleSubmit, errors, onSubmit };
};
