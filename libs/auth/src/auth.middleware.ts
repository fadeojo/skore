import { NestMiddleware, Injectable, Inject } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import authConfig from '../config/auth.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    @Inject(authConfig.KEY)
    private readonly authConfiguration: ConfigType<typeof authConfig>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  use(req, res, next) {
    const { clientId, issuer, jwksUri } = this.authConfiguration;
    jwt({
      secret: expressJwtSecret({
        cache: false,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri,
      }),
      audience: clientId,
      issuer,
      algorithm: 'RS256',
    })(req, res, () => {
      next();
    });
  }
}
