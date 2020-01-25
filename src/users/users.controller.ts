import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from './users.service';

interface UserDto {
  id: number;
  name: string;
  lastName: string;
  Age: number;
}

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Get('all')
  async GetAll() {
    return await this.userService.getAll();
  }

  @Post('add')
  async Add(@Body() user: any) {
    await this.userService.add(user);
  }
}
