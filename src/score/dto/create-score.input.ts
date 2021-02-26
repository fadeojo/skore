import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateScoreInput {
  @Field(() => Int, { description: "Numeric weigth of the score" })
  value: number;

  @Field(() => Int, { description: "profile ID" })
  profile_id: number;

  @Field(() => String, { description: "name of the movie for the score" })
  name: string;

  @Field(() => String, {
    description: "description of the movie for the score",
  })
  description: string;
}
