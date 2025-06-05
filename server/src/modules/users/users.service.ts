import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FindOneUserResponseDto } from './dto/find-one-user-response.dto';

@Injectable()
export class UsersService {

 constructor (private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
 await this.prisma.user.create({
  data: { ...createUserDto}
 })
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(username: string): Promise<FindOneUserResponseDto> {
    const account = await this.prisma.user.findFirst({
      where: { username },
      select: {
        username: true,
        password: true,
      }
    });

    if (!account) {
      throw new NotFoundException('User not found');
    }

    return { data: account };
  }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }
}