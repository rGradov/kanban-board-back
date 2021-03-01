import { Columns } from './../column/columns.entity';
import { Entity, ObjectIdColumn, Column, ManyToOne, ObjectID } from 'typeorm';

@Entity()
export class ColumnItem {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  title: string;
  @ManyToOne(() => Columns, (columnitem) => columnitem.items)
  column: Columns;
  constructor(ColumnItem?: Partial<ColumnItem>) {
    Object.assign(this, ColumnItem);
  }
}
