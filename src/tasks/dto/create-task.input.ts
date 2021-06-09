import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateTaskInput {
  @Field(() => String, { description: "Task name" })
  name: string;

  @Field(() => String, { description: "Task description" })
  description: string;
}
