import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const graphqlContext = ctx.getContext();
    if (!!graphqlContext.req.user) {
      return true;
    }
    throw new HttpException(
      { message: 'unauthenticated' },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
