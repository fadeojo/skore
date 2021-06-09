import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Task {
  @Field(() => ID, { description: "score ID" })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: "Task name" })
  @Column()
  name: string;

  @Field(() => String, { description: "Task description" })
  @Column()
  description: string;
}
