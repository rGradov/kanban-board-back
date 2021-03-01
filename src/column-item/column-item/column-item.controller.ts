
import { ColumnItemService } from './column-item.service';
import { Body, Controller, Post } from '@nestjs/common';
import { ColumnItem } from '../column-item.entity';

@Controller('api/items')
export class ColumnItemController {
  constructor(private readonly itemService: ColumnItemService) { }

  @Post('post')
  async createColumn(@Body() column: Partial<ColumnItem>) {
    return await this.itemService.createColumn(column);
  }


}
