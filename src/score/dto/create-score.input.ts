import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateScoreInput {
  @Field(() => Int, { description: "Numeric weigth of the score" })
  value: number;

  @Field(() => Int, { description: "profile ID" })
  profile_id: number;
}
