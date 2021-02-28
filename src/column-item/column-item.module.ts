import { Module } from '@nestjs/common';
import { ColumnItemService } from './column-item/column-item.service';
import { ColumnItemController } from './column-item/column-item.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ColumnItem, ColumnItemSchema } from './schemas/column-item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ColumnItem.name, schema: ColumnItemSchema },
    ]),
  ],
  providers: [ColumnItemService],
  controllers: [ColumnItemController],
})
export class ColumnItemModule { }
