import { UpdateColumnDto } from './dto/update-column.dto';
import { CreateColumnDto } from './dto/create-column.dto';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Columns } from './columns.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ColumnItem } from 'src/column-item/column-item.entity';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(Columns)
    private repo: MongoRepository<Columns>,
  ) { }

  async getCurrentItem(columnId: string): Promise<ColumnItem[]> {
    const result = await this.repo.findOne({
      where: { id: columnId },
      relations: ['items'],
    });
    return result.items;
  }
  async createColumn(column: Partial<Columns>): Promise<Columns> {
    const result = await this.repo.save(new Columns(column));
    return await result;
  }
  async deleteColum(id: string): Promise<any> {
    const column = ObjectID.isValid(id) && (await this.repo.findOne(id));
    if (!column) {
      throw new NotFoundException();
    }
    await this.repo.delete(id);
    return column;
  }
  async getAllColumns(): Promise<Columns[]> {
    return await this.repo.find();
  }
  async getCurrentColumn(id: string): Promise<Columns> {
    const column = ObjectID.isValid(id) && (await this.repo.findOne(id));
    if (!column) {
      throw new NotFoundException();
    }
    return column;
  }
  async updateColumProp(id: string, data: Partial<Columns>): Promise<void> {
    const column = ObjectID.isValid(id) && (await this.repo.findOne(id));
    if (!column) {
      throw new NotFoundException();
    }
    await this.repo.update(id, data);
  }
}
