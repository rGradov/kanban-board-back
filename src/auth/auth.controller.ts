import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import {
  Controller,
  Request,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  Get,
} from '@nestjs/common';
import { AuthResponseType } from './interface/auth-response.interface';
import { User } from 'src/users/schemas/user.schemas';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async Login(@Body() loginDto: LoginDto): Promise<AuthResponseType> {
    return await this.authService.login(loginDto);
  }
  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<any> {
    return await this.authService.register(registerDto);
  }
}
