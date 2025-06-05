import { ApiProperty, PickType } from '@nestjs/swagger';
import { WorkoutEntity } from '../entities/workout.entity';
import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class WorkoutForFindOne extends PickType(WorkoutEntity, [
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

export class FindOneWorkoutResponseDto {
  @ApiProperty({ type: WorkoutForFindOne })
  @ValidateNested()
  @Type(() => WorkoutForFindOne)
  data: WorkoutForFindOne;
}
