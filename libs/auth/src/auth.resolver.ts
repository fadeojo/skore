import Axios from 'axios';
import { stringify } from 'querystring';
import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { LoginInput } from './dto/loginInput';
import { LoginOutput } from './dto/loginOutput';

@Resolver()
export class AuthResolver {
  constructor(private readonly configService: ConfigService) {}
  @Mutation(() => LoginOutput)
  async login(@Args('login') params: LoginInput): Promise<LoginOutput> {
    const loginFormData = stringify({
      grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
      username: params.email,
      password: params.password,
      client_id: this.configService.get('auth').clientId,
      realm: this.configService.get('auth').realm,
    });

    try {
      const loginResponse = await Axios.post(
        `${this.configService.get('auth').issuer}oauth/token`,
        loginFormData,
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
      );

      return {
        access: loginResponse.data.access_token,
        id: loginResponse.data.id_token,
        scope: loginResponse.data.scope,
        expires: loginResponse.data.expires_in,
        type: loginResponse.data.token_type,
      };
    } catch (error) {
      throw error;
    }
  }

  @Query(() => LoginOutput)
  hello(): LoginOutput {
    return {
      access: '',
      id: '',
      scope: '',
      expires: 1,
      type: '',
    };
  }
}
