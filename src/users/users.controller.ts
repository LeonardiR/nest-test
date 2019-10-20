import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

interface UserDto {
  id: number;
  name: string;
  lastName: string;
  Age: number;
}

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param() params) {
    return this.userService.getUsers().filter(u => u.id == params.id);
  }

  @Post()
  createUser(@Body() product: UserDto) {
    console.log('create product', product);
    this.userService.createUser(product);
  }

  @Put()
  updateUser(@Body() product: UserDto) {
    console.log('update product', product);
    this.userService.updateUser(product);
  }

  @Delete()
  deleteUser(@Body() product: UserDto) {
    console.log('delete product', product.id);
    this.userService.deleteUser(product.id);
  }
}
