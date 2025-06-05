import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { UpdateWorkoutDto } from './dto/update-workout.dto';

import { FindAllWorkoutResponseDto } from './dto/find-all-workout-reponse.dto';
import { FindOneWorkoutResponseDto } from './dto/find-one-workout-response.dto';

@Injectable()
export class WorkoutsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWorkoutDto: CreateWorkoutDto) {
    await this.prisma.workout.create({
      data: { ...createWorkoutDto },
    });
  }

  async update(id: string, updateWorkoutDto: UpdateWorkoutDto) {
    const workout = await this.prisma.workout.findFirst({
      where: {
        id,
      },
    });

    if (!workout) throw new NotFoundException('Workout does not exist');

    await this.prisma.workout.update({
      where: {
        id: id,
      },
      data: { ...updateWorkoutDto },
    });
  }

  async findAll(): Promise<FindAllWorkoutResponseDto> {
    const workouts = await this.prisma.workout.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        date: true,
        duration: true,
        type: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });

    return { data: workouts };
  }

  async findOne(id: string): Promise<FindOneWorkoutResponseDto> {
    const workout = await this.prisma.workout.findFirst({
      where: { id },
      select: {
        id: true,
        title: true,
        description: true,
        date: true,
        duration: true,
        type: true,
        createdAt: true,
        updatedAt: true,
        deletedAt: true,
      },
    });

    if (!workout) {
      throw new NotFoundException('Workout does not exist');
    }

    return { data: workout };
  }

  async remove(id: string) {
    const workoutExists = await this.prisma.workout.findFirst({
      where: { id },
    });

    if (!workoutExists) {
      throw new NotFoundException('Workout does not exist!');
    }

    await this.prisma.workout.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
