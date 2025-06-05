import { Module } from '@nestjs/common';

import { PrismaModule } from './modules/prisma/prisma.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [WorkoutsModule, PrismaModule, UsersModule],
})
export class AppModule {}
