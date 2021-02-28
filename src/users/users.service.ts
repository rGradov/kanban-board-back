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
}
