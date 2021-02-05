import { Field, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

// TO DO: Add leader board relation

@Entity()
export class Task {
  @Field(() => ID, { description: "task ID" })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: "Task name" })
  @Column({ name: "name" })
  name: String;

  @Field(() => String, { description: "Task description" })
  @Column({ name: "description" })
  description: String;

  @Field(() => String)
  @CreateDateColumn({
    type: "timestamptz",
    name: "created_at",
  })
  createdAt: string;

  @Field(() => String)
  @UpdateDateColumn({
    type: "timestamptz",
    name: "updated_at",
  })
  updatedAt: string;

  @Field(() => String, { nullable: true })
  @DeleteDateColumn({
    type: "timestamptz",
    name: "deleted_at",
  })
  deletedAt: string;
}
