import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
import { Column } from './schemas/column.schema';

@Injectable()
export class ColumnService {
  constructor(@InjectModel(Column.name) private columnModel: Model<Column>) { }
  async getALL(): Promise<Column[]> {
    return await this.columnModel.find().exec();
  }
  async getById(id: string): Promise<Column> {
    return await this.columnModel.findById(id);
  }
  async createColumn(columnDto: CreateColumnDto): Promise<Column> {
    const newColumn = new this.columnModel(columnDto);
    return await newColumn.save();
  }
  async removeColumn(id: string): Promise<Column> {
    return await this.columnModel.findByIdAndRemove(id);
  }
  async updateColumn(id: string, columnDto: UpdateColumnDto): Promise<Column> {
    return this.columnModel.findByIdAndUpdate(id, columnDto);
  }
}
