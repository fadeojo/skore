import { UpdateProfileInput } from '../dto/profile.dto';

export const updatedProfileFactory: UpdateProfileInput = {
  firstName: 'updated firstName',
  lastName: 'updated lastName',
  phone: '6131231235',
  businessName: 'updated business name',
  industry: 'updated industry',
  city: 'updated City',
  country: 'updated Country',
  line: '26 Auriga Drive updated',
  placeId: 'updated 12367',
  postalCode: 'B2B 1A1',
  state: 'updated province',
  location: {
    type: 'Point',
    coordinates: [-74.111112, 45.111112],
  },
};
