import { ApiProperty, PickType } from '@nestjs/swagger';
import { WorkoutEntity } from '../entities/workout.entity';
import { ValidateNested } from 'class-validator';

export class CreateWorkoutDto extends PickType(WorkoutEntity, [
  'title',
  'description',
  'date',
  'duration',
  'type',
]) {}
