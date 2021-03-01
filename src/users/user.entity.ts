import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
@Entity('users')
export class User {
  @ObjectIdColumn() id: ObjectID;
  @Column() email: string;
  @Column() password: string;

  constructor(User?: Partial<User>) {
    Object.assign(this, User);
  }
}
