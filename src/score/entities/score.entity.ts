import { ObjectType, Field, Int, ID } from "@nestjs/graphql";
import { Column, JoinColumn } from "typeorm";
import { ManyToOne } from "typeorm";
import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "../../profile/profile.entity";

@Entity()
@ObjectType()
export class Score {
  @Field(() => ID, { description: "score ID" })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { description: "Numeric weigth of the score" })
  @Column({ name: "value" })
  value: number;

  @Field(() => Int, { description: "profile ID" })
  @Column()
  profile_id: number;

  @ManyToOne(
    () => Profile,
    (profile) => profile.scores
  )
  @JoinColumn({ name: "profile_id", referencedColumnName: "id" })
  profile: Profile;
}
