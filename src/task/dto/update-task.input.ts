import { PartialType } from "@nestjs/graphql";
import { CreateTaskInput } from "./create-task.input";

export class UpdateTaskInput extends PartialType(CreateTaskInput) {}
