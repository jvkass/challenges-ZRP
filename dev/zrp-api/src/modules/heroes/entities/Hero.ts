import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("heroes")
class Hero {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  rank: string;

  @Column()
  location: JSON;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Hero };