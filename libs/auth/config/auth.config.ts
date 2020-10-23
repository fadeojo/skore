import { registerAs } from '@nestjs/config';
interface AuthConfig {
  jwksUri: string;
  issuer: string;
  clientId: string;
  clientSecret: string;
  realm: string;
}

export default registerAs(
  'auth',
  (): AuthConfig => ({
    jwksUri: process.env.LOGISTIC_JWKSURI,
    issuer: process.env.LOGISTIC_ISSUER,
    clientId: process.env.LOGISTIC_CLIENT_ID,
    clientSecret: process.env.LOGISTIC_CLIENT_SECRET,
    realm: process.env.LOGISTIC_REALM,
  }),
);
