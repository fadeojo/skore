import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common';
import { GqlExceptionFilter, GqlArgumentsHost } from '@nestjs/graphql';

@Catch(HttpException)
export class ExceptionLoggerFilter<T> implements GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const gqlHost = GqlArgumentsHost.create(host);
    Logger.error(exception, exception.stack);
  }
}
