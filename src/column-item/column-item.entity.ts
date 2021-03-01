import { Columns } from './../column/columns.entity';
import { Entity, ObjectID, ObjectIdColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ColumnItem {
  @ObjectIdColumn()
  id: number;
  @Column()
  title: string;
  @ManyToOne(() => Columns, (columnitem) => columnitem.items)
  column: Columns;
}
