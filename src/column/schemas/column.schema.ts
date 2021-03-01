import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { ColumnItem } from 'src/column-item/schemas/column-item.schema';


export type ColumnDocument = Column & Document;

@Schema()
export class Column {
  @Prop()
  title: string;
  @Prop()
  ColumnId: number;
  @Prop({ default: '#0080ff' })
  color: string;
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ColumnItem' }]
  })
  columnItem: ColumnItem[];
}

export const ColumnSchema = SchemaFactory.createForClass(Column);
