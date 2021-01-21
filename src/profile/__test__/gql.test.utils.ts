import gql from "graphql-tag";
import { updatedProfileFactory } from "./profileTest.dto";

export const getProfileQuery = {
  query: gql`
    query {
      getProfile {
        id
        userId
        firstName
        lastName
        phone
        accountType
        createdAt
        updatedAt
        line
        lineAlt
        city
        state
        postalCode
        placeId
        country
        location {
          type
          coordinates
        }
      }
    }
  `,
};

export const createProfile = {
  mutation: gql`
    mutation CreateProfile($profile: CreateProfileInput!) {
      createProfile(profile: $profile) {
        id
        userId
        firstName
        lastName
        phone
        accountType
        createdAt
        updatedAt
        line
        lineAlt
        city
        state
        postalCode
        placeId
        country
        location {
          type
          coordinates
        }
      }
    }
  `,
  variables: {
    profile: {
      firstName: "Femi",
      lastName: "Adeojo",
      phone: "6131231234",
      accountType: "ADMIN",
      city: "Ottawa",
      country: "Canada",
      line: "26 Auriga Drive",
      placeId: "12345",
      postalCode: "A1A 1A1",
      state: "ON",
      location: {
        type: "Point",
        coordinates: [-74.111111, 45.111111],
      },
      email: "test@test.io",
      password: "9a$$w0rD",
    },
  },
};

export const updateProfile = {
  mutation: gql`
    mutation UpdateProfile($profile: UpdateProfileInput!) {
      updateProfile(profile: $profile) {
        id
        userId
        firstName
        lastName
        phone
        accountType
        createdAt
        updatedAt
        line
        lineAlt
        city
        state
        postalCode
        placeId
        country
        location {
          type
          coordinates
        }
      }
    }
  `,
  variables: {
    profile: updatedProfileFactory,
  },
};

export const deleteProfile = {
  mutation: gql`
    mutation {
      deleteProfile {
        id
        userId
        firstName
        lastName
        phone
        accountType
        createdAt
        updatedAt
        line
        lineAlt
        city
        state
        postalCode
        placeId
        country
        location {
          type
          coordinates
        }
      }
    }
  `,
};
