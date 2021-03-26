import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Item } from '../column-item.entity';
import { ObjectID } from 'mongodb';
import { itemDto } from '../dto/item.dto';

@Injectable()
export class ColumnItemService {
  constructor(
    @InjectRepository(Item)
    private repo: MongoRepository<Item>,
  ) { }
  async createItem(item: Partial<Item>): Promise<Item> {
    const name = await this.repo.findOne({
      where: { columnId: item.columnId, title: item.title },
    });
    if (name) {
      throw new NotFoundException();
    }
    const result = await this.repo.save(new Item(item));
    return await result;
  }
  async getAllItems(id): Promise<Item[]> {
    return await this.repo.find({
      where: { columnId: id },
      order: { pos: 'ASC' },
    });
  }
  async deleteItem(id: string): Promise<any> {
    const Item = ObjectID.isValid(id) && (await this.repo.findOne(id));
    if (!Item) {
      throw new NotFoundException();
    }
    await this.repo.delete(id);
    return Item;
  }
  async currentItem(id: string): Promise<Item> {
    const Item = ObjectID.isValid(id) && (await this.repo.findOne(id));
    if (!Item) {
      throw new NotFoundException();
    }
    return Item;
  }
  async updateItemProp(id: string, data: Partial<Item>): Promise<void> {
    const Item = ObjectID.isValid(id) && (await this.repo.findOne(id));
    if (!Item) {
      throw new NotFoundException();
    }
    await this.repo.update(id, data);
  }
  async getLastItemPos(): Promise<any> {
    const items = await this.repo.find({ order: { pos: 'ASC' } });
    const response = { id: items[items.length - 1].pos };
    return response;
  }
  async getCurrentItem(id: string): Promise<any> {
    return await this.repo.findOne(id);
  }
}
