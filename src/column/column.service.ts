import { MongoRepository, Column } from 'typeorm';
import { ObjectID } from 'mongodb';
import { Columns } from './columns.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ColumnService {
  constructor(
    @InjectRepository(Columns)
    private repo: MongoRepository<Columns>,
  ) { }

  async getCurrentItem(columnId: string): Promise<any> {
    const result = await this.repo.findOne({
      where: { id: columnId },
      relations: ['items'],
    });
    return result;
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
    return await this.repo.find({ order: { pos: 'ASC' } });
  }
  async getLastPos(): Promise<any> {
    const body = await this.getAllColumns();
    const response = { id: body[body.length - 1].pos };

    return response;
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
