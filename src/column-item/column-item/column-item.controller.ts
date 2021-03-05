import { findDto } from './../dto/find.dto';
import { ColumnItemService } from './column-item.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Item } from '../column-item.entity';

@Controller('api/items')
export class ColumnItemController {
  constructor(private readonly itemService: ColumnItemService) { }
  @Get('/last')
  async getLastColumns(): Promise<any> {
    return await this.itemService.getLastItemPos();
  }

  @Post('post')
  async createItem(@Body() item: Partial<Item>) {
    return await this.itemService.createItem(item);
  }
  @Get(':id')
  async getAllItems(@Param('id') id: string): Promise<Item[]> {
    return await this.itemService.getAllItems(id);
  }
  @Delete(':id')
  async deleteColumn(@Param('id') id: string) {
    return await this.itemService.deleteItem(id);
  }
  @Put(':id')
  async updateColumn(@Param('id') id: string, @Body() data: Partial<Item>) {
    return await this.itemService.updateItemProp(id, data);
  }
}
