import { LoginDto } from './dto/login.dto';
import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/users/interface/user.interface';
import { JwtService } from '@nestjs/jwt';
import { AuthResponseType } from './interface/auth-response.interface';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  private generateToken(data): string {
    return this.jwtService.sign(data);
  }
  private async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.getOneUserByEmail(email);
    if (!user || user.password !== pass) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return user;
  }
  async login(loginDto: LoginDto): Promise<AuthResponseType> {
    const { email } = await this.validateUser(
      loginDto.email,
      loginDto.password,
    );
    const token = this.generateToken({ email });

    return { token, email };
  }
}
