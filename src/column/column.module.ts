import { Columns } from './columns.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnController } from './column.controller';
import { ColumnService } from './column.service';

@Module({
  imports: [TypeOrmModule.forFeature([Columns])],
  controllers: [ColumnController],
  providers: [ColumnService],
  exports: [TypeOrmModule.forFeature([Columns])],
})
export class ColumnModule { }
