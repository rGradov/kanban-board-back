import { Entity, ObjectIdColumn, Column, ObjectID } from 'typeorm';


@Entity()
export class Comment {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  text: string;
  @Column()
  itemId: string;
  @Column()
  date: Date;


  constructor(Comment?: Partial<Comment>) {
    Object.assign(this, Comment);
  }
}