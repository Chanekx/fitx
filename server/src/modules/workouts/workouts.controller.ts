import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { WorkoutsService } from './workouts.service';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { FindAllWorkoutResponseDto } from './dto/find-all-workout-reponse.dto';
import { FindOneWorkoutResponseDto } from './dto/find-one-workout-response.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  async create(@Body() createWorkoutDto: CreateWorkoutDto) {
    await this.workoutsService.create(createWorkoutDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateWorkoutDto: UpdateWorkoutDto,
  ) {
    await this.workoutsService.update(id, updateWorkoutDto);
  }

  @Get()
  async findAll(): Promise<FindAllWorkoutResponseDto> {
    return await this.workoutsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FindOneWorkoutResponseDto> {
    return await this.workoutsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.workoutsService.remove(id);
  }
}
