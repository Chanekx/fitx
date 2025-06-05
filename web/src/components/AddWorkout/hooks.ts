import { WORKOUT_TYPE } from "@/Constants/workoutType";
import yup from "@/lib/yup";
import { workoutApi } from "@/services/apiService";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { WorkoutsProps } from ".";
import { useState } from "react";
import { useSnackbarContext } from "@/context/SnackbarContext";

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().optional().default(""),
  date: yup.date().required(),
  duration: yup.number().required().max(300).min(1),
  type: yup.string().required().oneOf(Object.values(WORKOUT_TYPE)),
});

type FormValues = yup.InferType<typeof schema>;

type UseHooksProps = Pick<WorkoutsProps, "handleClose">;

export const useHooks = ({ handleClose }: UseHooksProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccess, showError } = useSnackbarContext();

  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const handleResetandClose = () => {
    reset({
      title: "",
      description: "",
      date: undefined,
      duration: undefined,
      type: WORKOUT_TYPE.CARDIO,
    });
    handleClose();
  };

  const createWorkout = async (data: FormValues) => {
    try {
      setIsSubmitting(true);
      await workoutApi.create({
        ...data,
      });
      showSuccess("Workout created successfully!");
      handleResetandClose();
    } catch (e) {
      const message =
        e instanceof Error
          ? e.message
          : "An error occurred while creating the workout";
      showError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    control,
    createWorkout: handleSubmit(createWorkout),
    handleSubmit,
    isValid,
    isSubmitting,
    handleResetandClose,
  };
};
