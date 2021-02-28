import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColumnModule } from './column/column.module';
import { ColumnItemModule } from './column-item/column-item.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import MongoURI from './keys';

@Module({
  imports: [
    ColumnModule,
    ColumnItemModule,
    CommentsModule,
    MongooseModule.forRoot(MongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
