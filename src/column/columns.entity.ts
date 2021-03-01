import { ColumnItem } from 'src/column-item/column-item.entity';
import { Entity, ObjectIdColumn, Column, OneToMany, ObjectID } from 'typeorm';

@Entity()
export class Columns {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  title: string;
  @Column()
  color: string;
  @OneToMany(() => ColumnItem, (columnitem) => columnitem.column)
  items: ColumnItem[];
  constructor(Columns?: Partial<Columns>) {
    Object.assign(this, Columns);
  }
}
