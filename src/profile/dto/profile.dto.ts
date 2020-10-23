import {
  Field,
  InputType,
  Float,
  PartialType,
  OmitType,
  ObjectType,
} from '@nestjs/graphql';
import { AccountType } from '../profile.entity';
import { Point } from 'geojson';

@InputType()
export class LocationInput {
  @Field(() => String)
  type: 'point';

  @Field(() => [Float])
  coordinates: number[];
}

@InputType()
export class CreateProfileInputRepositoryDTO {
  @Field()
  firstName: string;

  @Field()
  userId: string;

  @Field()
  lastName: string;

  @Field()
  phone: string;

  @Field()
  businessName: string;

  @Field(() => AccountType)
  accountType: AccountType;

  @Field()
  industry: string;

  @Field(() => String)
  line: string;

  @Field(() => String, { nullable: true })
  lineAlt?: string;

  @Field(() => String)
  city: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  postalCode: string;

  @Field(() => String)
  placeId: string;

  @Field(() => String)
  country: string;

  @Field(() => LocationInput)
  location: Point;
}

@InputType()
export class CreateProfileInput extends OmitType(
  CreateProfileInputRepositoryDTO,
  ['userId'] as const,
) {}

@InputType()
export class UpdateProfileInput extends PartialType(CreateProfileInput) {}

@ObjectType()
export class DeleteProfileOutput {
  @Field(() => String)
  result;

  constructor(result: string) {
    this.result = result;
  }
}
