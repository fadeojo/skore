import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field()
  email: string;

  @Field()
  aud: string;

  @Field()
  "email_verified": string;

  @Field()
  exp: number;

  @Field()
  "family_name": string;

  @Field()
  "given_name": string;

  @Field()
  iat: number;

  @Field()
  iss: string;

  @Field()
  name: string;

  @Field()
  nickname: string;

  @Field()
  picture: string;

  @Field()
  sub: string;

  @Field()
  userId: string;

  @Field()
  "updated_at": string;

  constructor(user: User) {
    this.email = user.email;
    this.aud = user.aud;
    this.email_verified = user.email_verified;
    this.exp = user.exp;
    this.family_name = user.family_name;
    this.given_name = user.given_name;
    this.iat = user.iat;
    this.iss = user.iss;
    this.name = user.name;
    this.nickname = user.nickname;
    this.picture = user.picture;
    this.sub = user.sub;
    this.userId = user.userId;
    this.updated_at = user.updated_at;
  }
}
