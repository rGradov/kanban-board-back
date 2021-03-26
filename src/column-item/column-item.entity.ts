import { Entity, ObjectIdColumn, Column, ObjectID } from 'typeorm';

@Entity()
export class Item {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  title: string;
  @Column()
  tag: string;
  @Column()
  description: string;
  @Column()
  columnId: string;
  @Column()
  pos: string;
  @Column()
  img: string;
  @Column()
  date: Date;

  constructor(Item?: Partial<Item>) {
    Object.assign(this, Item);
  }
}
