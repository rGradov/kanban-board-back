import { ColumnService } from './column.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Columns } from './columns.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/columns')
@UseGuards(JwtAuthGuard)
export class ColumnController {
  constructor(private readonly columnService: ColumnService) { }
  @Get('/last')
  async getLastColumns(): Promise<any> {
    return await this.columnService.getLastPos();
  }
  @Get()
  async getAllColumns(): Promise<Columns[]> {
    return await this.columnService.getAllColumns();
  }
  @Get(':id')
  async getCurrentColumn(@Param('id') id: string): Promise<Columns> {
    return await this.columnService.getCurrentColumn(id);
  }
  @Post('post')
  async createColumn(@Body() column: Partial<Columns>) {
    return await this.columnService.createColumn(column);
  }
  @Delete(':id')
  async deleteColumn(@Param('id') id: string) {
    return await this.columnService.deleteColum(id);
  }
  @Put(':id')
  async updateColumn(@Param('id') id: string, @Body() data: Partial<Columns>) {
    return await this.columnService.updateColumProp(id, data);
  }
}
