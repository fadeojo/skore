import { UpdateProfileInput } from "../dto/profile.dto";
import { AccountType } from "../profile.entity";

export const updatedProfileFactory: UpdateProfileInput = {
  firstName: "updated firstName",
  lastName: "updated lastName",
  phone: "6131231235",
  city: "updated City",
  country: "updated Country",
  line: "26 Auriga Drive updated",
  placeId: "updated 12367",
  postalCode: "B2B 1A1",
  state: "updated province",
  location: {
    type: "Point",
    coordinates: [-74.111112, 45.111112],
  },
};

export const mockProfile = {
  firstName: "Femi",
  lastName: "Adeojo",
  phone: "6131231234",
  accountType: AccountType.ADMIN,
  city: "Ottawa",
  country: "Canada",
  line: "26 Auriga Drive",
  lineAlt: null,
  placeId: "12345",
  postalCode: "A1A 1A1",
  state: "ON",
  location: {
    type: "Point",
    coordinates: [-74.111111, 45.111111],
  },
};
