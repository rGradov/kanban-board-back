import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import {
  Controller,
  Request,
  Post,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { AuthResponseType } from './interface/auth-response.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async Login(@Body() loginDto: LoginDto): Promise<AuthResponseType> {
    return await this.authService.login(loginDto);
  }
}
