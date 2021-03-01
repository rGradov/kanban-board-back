import { Module } from '@nestjs/common';
import { ColumnItemService } from './column-item/column-item.service';
import { ColumnItemController } from './column-item/column-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnItem } from './column-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ColumnItem])],
  providers: [ColumnItemService],
  controllers: [ColumnItemController],
  exports: [TypeOrmModule.forFeature([ColumnItem])],
})
export class ColumnItemModule { }
