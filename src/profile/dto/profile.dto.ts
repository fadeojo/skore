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
  lastName: string;

  @Field()
  phone: string;

  @Field(() => AccountType)
  accountType: AccountType;

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

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}

@InputType()
export class CreateProfileInput extends CreateProfileInputRepositoryDTO {}

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
