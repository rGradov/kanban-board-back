import { ColumnService } from './column.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Column } from './schemas/column.schema';
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';

@Controller('api/columns')
export class ColumnController {
  constructor(private readonly columnService: ColumnService) { }
  @Get()
  async getAll(): Promise<Column[]> {
    return await this.columnService.getALL();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Column> {
    return await this.columnService.getById(id);
  }
  @Post()
  create(@Body() createColumnDto: CreateColumnDto): Promise<Column> {
    return this.columnService.createColumn(createColumnDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Column> {
    return this.columnService.removeColumn(id);
  }
  @Put(':id')
  update(
    @Body() updateColDto: UpdateColumnDto,
    @Param('id') id: string,
  ): Promise<Column> {
    return this.columnService.updateColumn(id, updateColDto);
  }
}
