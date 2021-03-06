import {
  Field,
  ID,
  ObjectType,
  registerEnumType,
  Float,
} from "@nestjs/graphql";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from "typeorm";
import { Point } from "geojson";
import { Score } from "../score/entities/score.entity";

export enum AccountType {
  ADMIN = "admin",
  USER = "user",
}

registerEnumType(AccountType, {
  name: "AccountType", // this one is mandatory
  description: "Account types", // this one is optional
});

@ObjectType()
export class Location {
  @Field(() => String)
  type: "point";

  @Field(() => [Float])
  coordinates: number[];
}

@Entity()
@ObjectType()
export class Profile {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ name: "user_id", unique: true })
  userId: string;

  @Field(() => String)
  @Column({ name: "first_name" })
  firstName: string;

  @Field(() => String)
  @Column({ name: "last_name" })
  lastName: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => AccountType)
  @Column({ name: "account_type" })
  accountType: AccountType;

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

  @Field(() => String)
  @Column({ name: "line" })
  line: string;

  @Field(() => String, { nullable: true })
  @Column({ name: "line_alt", nullable: true })
  lineAlt?: string;

  @Field(() => String)
  @Column({ name: "city" })
  city: string;

  @Field(() => String)
  @Column({ name: "state" })
  state: string;

  @Field(() => String)
  @Column({ name: "postal_code" })
  postalCode: string;

  @Field(() => String)
  @Column({ name: "place_id" })
  placeId: string;

  @Field(() => String)
  @Column({ name: "country" })
  country: string;

  @Field(() => Location)
  @Column("geometry")
  location: Point;

  @OneToMany(
    () => Score,
    (scores) => scores.profile,
    { eager: true }
  )
  scores: Score[];

  constructor(profile?: Profile) {
    if (profile) {
      this.id = profile.id;
      this.userId = profile.userId;
      this.firstName = profile.firstName;
      this.lastName = profile.lastName;
      this.phone = profile.phone;
      this.accountType = profile.accountType;
      this.line = profile.line;
      this.lineAlt = profile.lineAlt;
      this.city = profile.city;
      this.state = profile.state;
      this.postalCode = profile.postalCode;
      this.placeId = profile.placeId;
      this.country = profile.country;
      this.location = profile.location;
      this.scores = profile.scores;
      this.createdAt = profile.createdAt;
      this.updatedAt = profile.updatedAt;
      this.deletedAt = profile.deletedAt;
    }
  }
}
