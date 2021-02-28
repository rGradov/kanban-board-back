import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ColumnItem extends Document {
  @Prop()
  ColumnItemId: number;
  @Prop()
  title: string;
}

export const ColumnItemSchema = SchemaFactory.createForClass(ColumnItem);
