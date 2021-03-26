import { Module } from '@nestjs/common';
import { ColumnItemService } from './column-item/column-item.service';
import { ColumnItemController } from './column-item/column-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './column-item.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forFeature([Item]),
    MulterModule.register({
      dest: './files',
    }),
  ],
  providers: [ColumnItemService],
  controllers: [ColumnItemController],
  exports: [TypeOrmModule.forFeature([Item])],
})
export class ColumnItemModule { }
