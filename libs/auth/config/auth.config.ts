import { registerAs } from "@nestjs/config";
interface AuthConfig {
  jwksUri: string;
  issuer: string;
  clientId: string;
  clientSecret: string;
  realm: string;
}

export default registerAs(
  "auth",
  (): AuthConfig => ({
    jwksUri: process.env.APP_JWKSURI,
    issuer: process.env.APP_ISSUER,
    clientId: process.env.APP_CLIENT_ID,
    clientSecret: process.env.APP_CLIENT_SECRET,
    realm: process.env.APP_REALM,
  })
);
