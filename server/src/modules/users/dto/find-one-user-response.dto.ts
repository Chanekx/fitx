import { ApiProperty, PickType } from "@nestjs/swagger";
import { UserEntity } from "../entities/user.entity";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class UserForFindOne extends PickType(UserEntity, [
    // 'userId',
    'username',
    'password',
    // 'firstname',
    // 'lastname',
]) {}

export class FindOneUserResponseDto{
    @ApiProperty({type: UserForFindOne })
    @ValidateNested()
    @Type(()=> UserForFindOne)
    data: UserForFindOne
}