import { UsersService } from './users.service';
import { Controller, Get, Param } from '@nestjs/common';
import { User } from './schemas/user.schemas';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  gettOne(@Param('id') id: string): Promise<User> {
    return this.userService.getOneUser(id);
  }
}
