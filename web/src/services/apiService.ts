import axios, { AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface CreateWorkoutDto {
  title: string;
  description?: string;
  date: Date;
  duration: number;
  type: string;
}

interface WorkoutForFindAll {
  id: string;
  title: string;
  description: string;
  date: Date;
  duration: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

interface WorkoutForFindAllResponseDto {
  data: WorkoutForFindAll[];
}

interface WorkoutForFindOneResponseDto {
  data: WorkoutForFindAll;
}

const getAll = async (): Promise<WorkoutForFindAll[]> => {
  const response: AxiosResponse<WorkoutForFindAllResponseDto> =
    await api.get<WorkoutForFindAllResponseDto>("/workouts");

  return response.data.data;
};

const getOne = async (id: string): Promise<WorkoutForFindOneResponseDto> => {
  const response: AxiosResponse<WorkoutForFindOneResponseDto> =
    await api.get<WorkoutForFindOneResponseDto>(`/workouts/${id}`);

  return response.data;
};

export const workoutApi = {
  create: (data: CreateWorkoutDto) => api.post("/workouts", data),
  getAll,
  getOne,
  delete: (id: string) => api.delete(`/workouts/${id}`),
  update: (id: string, data: Partial<CreateWorkoutDto>) => api.patch(`/workouts/${id}`, data),
};
