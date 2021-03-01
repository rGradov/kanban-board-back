import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ColumnDocument = ColumnItem & Document;

@Schema()
export class ColumnItem {
  @Prop()
  ColumnItemId: number;
  @Prop()
  title: string;
}

export const ColumnItemSchema = SchemaFactory.createForClass(ColumnItem);
