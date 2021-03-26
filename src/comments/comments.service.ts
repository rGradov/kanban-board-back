import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Comment } from './dto/comments.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private repo: MongoRepository<Comment>,
  ) { }
  async createComment(comment: Partial<Comment>): Promise<Comment> {
    return await this.repo.save(new Comment(comment));
  }
  async getAllComments(id): Promise<Comment[]> {
    return await this.repo.find({
      where: { itemId: id },
    });
  }
  async deleteComment(id: string): Promise<any> {
    const Item = ObjectID.isValid(id) && (await this.repo.findOne(id));
    if (!Item) {
      throw new NotFoundException();
    }
    await this.repo.delete(id);
    return Item;
  }
}