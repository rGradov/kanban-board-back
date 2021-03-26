import { itemDto } from './../dto/item.dto';
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
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Item } from '../column-item.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';

@Controller('api/items')
// @UseGuards(JwtAuthGuard)
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
  @Get('current/:id')
  async getCurrentItem(@Param('id') id: string): Promise<Item> {
    return await this.itemService.getCurrentItem(id);
  }
  @Post('img/upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async uploadimg(@UploadedFile() file) {
    const response = {
      filename: file.filename,
    };
    return await response;
  }
  //перекинуть
  @Get('img/:imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res) {
    return res.sendFile(image, { root: './files' });
  }
}
