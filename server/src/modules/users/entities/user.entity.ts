import { IsDate, IsString } from 'class-validator';
import { User as UserModel } from '@prisma/client';

export class UserEntity {
  @IsString()
  userId: UserModel['userId'];

  @IsString()
  username: UserModel['username'];

  @IsString()
  password: UserModel['password'];

  @IsString()
  firstname: UserModel['firstname'];

  @IsString()
  lastname: UserModel['lastname'];

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsDate()
  deletedAt: Date;
}
