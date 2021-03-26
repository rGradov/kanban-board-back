import { RegisterDto } from './../auth/dto/register.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) { }

  async getAllUsers(): Promise<any> {
    return await this.userRepository.find();
  }
  async getOneUser(id: string): Promise<any> {

    return await this.userRepository.findOne(id);
  }
  async getOneUserByEmail(email: string): Promise<any | undefined> {
    return await this.userRepository.findOne({ email: email });
  }
  async registerUser(user: Partial<User>): Promise<any> {
    return this.userRepository.save(new User(user));
  }
}
