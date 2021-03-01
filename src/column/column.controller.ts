import { UpdateColumnDto } from './dto/update-column.dto';
import { CreateColumnDto } from './dto/create-column.dto';
import { ColumnService } from './column.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Columns } from './columns.entity';

@Controller('api/columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) { }
  @Get()
  async getAllColumns(): Promise<Columns[]> {
    return await this.columnService.getAllColumns();
  }
  @Get(':id')
  async getCurrentColumn(@Param('id') id: string): Promise<Columns> {
    return await this.columnService.getCurrentColumn(id);
  }
  @Get('items')
  async getItems(@Body('id') id: string) {
    return await this.columnService.getCurrentItem(id);
  }
  @Post('post')
  async createColumn(@Body() column: CreateColumnDto) {
    return await this.columnService.createColumn(column);
  }
  @Delete(':id')
  @HttpCode(204)
  async deleteColumn(@Param('id') id: string) {
    return await this.columnService.deleteColum(id);
  }
  @Put(':id')
  async updateColumn(@Param('id') id: string, @Body() data: Partial<Columns>) {
    return await this.columnService.updateColumProp(id, data);
  }
}
