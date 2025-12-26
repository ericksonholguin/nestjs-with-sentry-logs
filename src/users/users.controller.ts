import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

import type { User } from './user.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    const users = await this.usersService.retrieveUsers();
    return {
      message: 'Users retrieved successfully',
      data: users,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.retrieveUser(id);
    return {
      message: 'User retrieved successfully',
      data: user,
    };
  }

  @Post()
  async create(@Body() user: User) {
    const newUser = await this.usersService.createUser(user);
    return {
      message: 'User created successfully',
      data: newUser,
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() user: User) {
    const updatedUser = await this.usersService.updateUser(id, user);
    return {
      message: 'User updated successfully',
      data: updatedUser,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedUser = await this.usersService.deleteUser(id);
    return {
      message: 'User deleted successfully',
      data: deletedUser,
    };
  }
}
