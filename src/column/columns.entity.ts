import { Entity, ObjectIdColumn, Column, ObjectID } from 'typeorm';

@Entity()
export class Columns {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  title: string;
  @Column()
  pos: string;
  constructor(Columns?: Partial<Columns>) {
    Object.assign(this, Columns);
  }
}
