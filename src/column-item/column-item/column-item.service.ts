import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { ColumnItem } from '../column-item.entity';

@Injectable()
export class ColumnItemService {
  constructor(
    @InjectRepository(ColumnItem)
    private repo: MongoRepository<ColumnItem>,
  ) { }
  async createColumn(column: Partial<ColumnItem>): Promise<ColumnItem> {
    const result = await this.repo.save(new ColumnItem(column));
    return await result;
  }
}
