import {
  IsDate,
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { Workout as WorkoutModel, WorkoutType } from '@prisma/client';
import { Type } from 'class-transformer';

export class WorkoutEntity {
  @IsString()
  title: WorkoutModel['title'];

  @IsString()
  @IsOptional()
  description?: WorkoutModel['description'];

  @IsString()
  id: WorkoutModel['id'];

  @IsDate()
  @Type(() => Date)
  date: WorkoutModel['date'];

  @IsNumber()
  duration: WorkoutModel['duration'];

  @IsEnum(WorkoutType)
  type: WorkoutModel['type'];

  @IsDate()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;

  @IsDate()
  @IsOptional()
  deletedAt: WorkoutModel['deletedAt'];
}
 