import { ApiProperty, PickType } from '@nestjs/swagger';
import { WorkoutEntity } from '../entities/workout.entity';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class WorkoutForFindAll extends PickType(WorkoutEntity, [
  'id',
  'title',
  'description',
  'date',
  'duration',
  'type',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}

export class FindAllWorkoutResponseDto {
  @ApiProperty({ type: WorkoutForFindAll, isArray: true })
  @ValidateNested({ each: true })
  @Type(() => WorkoutForFindAll)
  data: WorkoutForFindAll[];
}
