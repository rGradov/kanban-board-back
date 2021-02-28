import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColumnModule } from './column/column.module';
import { ColumnItemModule } from './column-item/column-item.module';
import { CommentsModule } from './comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Service } from './column-tem/.service';
import MongoURI from './keys';

@Module({
  imports: [
    MongooseModule.forRoot(MongoURI),
    UsersModule,
    AuthModule,
    ColumnModule,
    ColumnItemModule,
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, Service],
})
export class AppModule { }
