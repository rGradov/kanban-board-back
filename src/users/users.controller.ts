import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, UseGuards } from '@nestjs/common';
import { User } from './user.entity';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  getAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  gettOne(@Param('id') id: string): Promise<User> {
    return this.userService.getOneUser(id);
  }
  @Get('e/:email')
  getOneByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.getOneUserByEmail(email);
  }
}
