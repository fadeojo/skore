import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginOutput {
  @Field()
  access: string;
  @Field()
  id: string;
  @Field()
  scope: string;
  @Field()
  expires: number;
  @Field()
  type: string;
}
