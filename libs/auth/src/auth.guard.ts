
import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JWKS, JWS, JWT } from 'jose';

const keystore = JWKS.asKeyStore({
  keys: [
    {
      alg: 'RS256',
      kty: 'RSA',
      use: 'sig',
      n:
        'sZV0Rb3adip9d1OG-moi9BBLUKFNOyM8SmdJJAdxyHWBZj2OWGF_qJhw55PacGYWq_dGK6VvVCMjh9yuepOo3_32ZIYO3y-8rHPWACfEOrAmp3bEEvcs-rC5k8e9FlVoZgIaCilyjPfv4xZ76JfZOboYgR2BWkInPtJNg36ejAb8h4ZcOilcBIeDCg8tXJ-njZl-AytCtemHTwq9j8nMUBdLdC1fZTBn7pv_MkGGMyIXzwGmrlmILnKkkn3ZtDDSynx_aTeilb6fUFLj5rfCSVxlxY0Av3ieoZF5tFvCSZ_wfocGFVtzCOGBL9qw4NmPkX0XqinwOm0fCqWiNrd2gw',
      e: 'AQAB',
      kid: 'MkEwQTQ2MTkwMUIwNUVGNDE5NkFGQUVGMTc4QUM1RUVCMTU0QUExNQ',
      x5t: 'MkEwQTQ2MTkwMUIwNUVGNDE5NkFGQUVGMTc4QUM1RUVCMTU0QUExNQ',
      x5c: [
        'MIIDBzCCAe+gAwIBAgIJb4vcIKIuFvGiMA0GCSqGSIb3DQEBCwUAMCExHzAdBgNVBAMTFmRldi01czhpbHk2Zy5hdXRoMC5jb20wHhcNMTkwNzA4MTIyNjQ0WhcNMzMwMzE2MTIyNjQ0WjAhMR8wHQYDVQQDExZkZXYtNXM4aWx5NmcuYXV0aDAuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsZV0Rb3adip9d1OG+moi9BBLUKFNOyM8SmdJJAdxyHWBZj2OWGF/qJhw55PacGYWq/dGK6VvVCMjh9yuepOo3/32ZIYO3y+8rHPWACfEOrAmp3bEEvcs+rC5k8e9FlVoZgIaCilyjPfv4xZ76JfZOboYgR2BWkInPtJNg36ejAb8h4ZcOilcBIeDCg8tXJ+njZl+AytCtemHTwq9j8nMUBdLdC1fZTBn7pv/MkGGMyIXzwGmrlmILnKkkn3ZtDDSynx/aTeilb6fUFLj5rfCSVxlxY0Av3ieoZF5tFvCSZ/wfocGFVtzCOGBL9qw4NmPkX0XqinwOm0fCqWiNrd2gwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQDzfNISnie3Zh6B0qYnql174criDAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBABV0lQsPF6GfiSXJQfBucZkQNKOI8xh515jyrBocIktlY2poVlKMAxVrRSxlOlkYg9r/+GKcyMjfkG29bwbfsC4kKbbCBpTfPOClnQJFmp5aqxaSCYT3uS14/c3oujN6jA91T53lU7BZ08EQZcZLnfrfpr7dfWy7RnSLkVVT4DaEwzQGpGN6igXMTjjyL144aF+zS23P5thI0kN3L7he2zr4d04TDSSSNIgC9v3HAgaYZ1Qjmp4q8V6CIZSrXTrFbB/N2jrh+/o7zLIKhRenmf+sKW1dZq9hTFCnTLH2EEweYGi5s/KC2NSqRv7Fsv1JveOMxJSyHa/6lPBt9lNKpd8=',
      ],
    },
    {
      alg: 'RS256',
      kty: 'RSA',
      use: 'sig',
      n:
        'yXQ2q4kTwF2o_DfssKDjGpMUzM6FSOaoumSmqPDDNe2Wt6-NOcGgemWu91OGn3exfkAnWTHHJtU2sTyoV9UOptKqs5_OClmenZ4Ma11baPOvaw5cNJOZqixh4AQhv0syC7qs85KMUplh23meYpApWgSCpg_DbounhLFgtdrwpiMnhahvnQAgiRCRN8HYlOiEr4pl2fYLEoxSLV1pbZK72SCKdQ1rvZyNGo4051u4g5yweXwPTsbj55mQwr88tEq2wBc4GRW8GYy_BdmnzVBpc3tTaWtDB3OpZ4HwXHhv_8ZwUj5dRS5jWA0I_B3Ftd6NnTlklsXDES2_7nTlymR6zQ',
      e: 'AQAB',
      kid: '8zTASkWbBn4R0uru3ogy-',
      x5t: '54saOobfRezNkJyevXGvJXYPW2o',
      x5c: [
        'MIIDBzCCAe+gAwIBAgIJDGc+NTogONUfMA0GCSqGSIb3DQEBCwUAMCExHzAdBgNVBAMTFmRldi01czhpbHk2Zy5hdXRoMC5jb20wHhcNMjAwMzExMjA0NjEyWhcNMzMxMTE4MjA0NjEyWjAhMR8wHQYDVQQDExZkZXYtNXM4aWx5NmcuYXV0aDAuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyXQ2q4kTwF2o/DfssKDjGpMUzM6FSOaoumSmqPDDNe2Wt6+NOcGgemWu91OGn3exfkAnWTHHJtU2sTyoV9UOptKqs5/OClmenZ4Ma11baPOvaw5cNJOZqixh4AQhv0syC7qs85KMUplh23meYpApWgSCpg/DbounhLFgtdrwpiMnhahvnQAgiRCRN8HYlOiEr4pl2fYLEoxSLV1pbZK72SCKdQ1rvZyNGo4051u4g5yweXwPTsbj55mQwr88tEq2wBc4GRW8GYy/BdmnzVBpc3tTaWtDB3OpZ4HwXHhv/8ZwUj5dRS5jWA0I/B3Ftd6NnTlklsXDES2/7nTlymR6zQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTosuGLEXrvWH1hlSt+p2mcUvX7+TAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBACxz/t8eY8nWzGuExKvjnLcDswRZ7kxxRCyVAL22h0cO/BVXEwu0J+HnmIq5kkzKaHIEgfUHwP6exIvlKFbnjexoasWrWRoLZxt4XywMu6QgxabeNC2dH+FwGCx41+F1/4KKQRL3F6BQ8ojbNKRwBosQVKJ5vZYACG05D6sXQL6dVc3CCf7H+phlE9uQIahabSSuENTWLoDlh7QCK6Q2yWFmrHfvIt6Tc+BbyYXC5s1I9Ro/tVPZiAB91h6//WbtHbt+fU4wQ9X74K0HvmZiueTWKUlG71qEfc18FpMla2ZsjljWDXQ4W38l4/ksLQtOX2dXtdXX0NBmVA+PvrdOecM=',
      ],
    },
  ],
});

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const graphqlContext = ctx.getContext();

    try {
      if (!!graphqlContext.req.headers.authorization) {
        const token: string = graphqlContext.req.headers.authorization?.split(' ')[1];
        JWS.verify(token, keystore, { complete: true });
        graphqlContext.req.user = JWT.decode(token);
       
        return true;
      }
      throw new HttpException({ message: 'unauthenticated' }, HttpStatus.UNAUTHORIZED);
    } catch (error) {
      throw error;
    }
  }
}