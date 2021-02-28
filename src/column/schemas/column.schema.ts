import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ColumnItem } from 'src/column-item/schemas/column-item.schema';

@Schema()
export class Column extends Document {
  @Prop()
  title: string;
  @Prop()
  ColumnId: number;
  @Prop({ default: '#0080ff' })
  color: string;
  @Prop([
    {
      type: MongooseSchema.Types.ObjectId,
      ref: ColumnItem.name,
    },
  ])
  columnItem: ColumnItem;
}

export const ColumnSchema = SchemaFactory.createForClass(Column);
