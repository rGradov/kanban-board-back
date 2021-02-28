import { RegisterDto } from './../auth/dto/register.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schemas';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
  async getOneUser(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }
  async getOneUserByEmail(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email: email });
  }
  async registerUser(userData: RegisterDto): Promise<any> {
    const user = new this.userModel(userData);
    return user.save()
  }
}
