import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from './../users/users.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserInt } from 'src/users/interface/user.interface';
import { JwtService } from '@nestjs/jwt';
import { AuthResponseType } from './interface/auth-response.interface';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  private generateToken(data): string {
    return this.jwtService.sign(data);
  }
  private async validateUser(email: string, pass: string): Promise<UserInt> {
    const user = await this.usersService.getOneUserByEmail(email);
    if (!user || !(await bcrypt.compare(pass, user.password))) {
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
  async register(registerDto: RegisterDto): Promise<any> {
    const user = registerDto;
    const cheked = await this.usersService.getOneUserByEmail(user.email);
    if (cheked) {
      throw new UnauthorizedException('email alredy taken');
    }
    user.password = await this.generateHash(user.password);
    return this.usersService.registerUser(user);
  }

  private async generateHash(pswd: string): Promise<string> {
    const hash = await bcrypt.hash(pswd, 10);
    return hash;
  }
}
