import { ColumnItem } from 'src/column-item/schemas/column-item.schema';

export class CreateColumnDto {
  title: string;
  ColumnId: number;
  color: string;
  columnItem: Array<ColumnItem>;
}
