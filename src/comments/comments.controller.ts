import { Comment } from './dto/comments.entity';
import { CommentsService } from './comments.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('api/comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) { }
  @Get(':id')
  async getAllComments(@Param('id') id: string): Promise<any> {
    return await this.commentsService.getAllComments(id);
  }
  @Delete(':id')
  async deleteColumn(@Param('id') id: string): Promise<any> {
    return await this.commentsService.deleteComment(id);
  }
  @Post('post')
  async createItem(@Body() Comment: Partial<Comment>) {
    return await this.commentsService.createComment(Comment);
  }
}
