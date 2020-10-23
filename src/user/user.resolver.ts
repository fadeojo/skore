import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from './currentUser.decorator';
import { AuthGuard } from '@skore/auth';
import { User } from './model/User';

@UseGuards(AuthGuard)
@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  async getUser(@CurrentUser() user: User): Promise<User> {
    const newUser = new User(user);
    return newUser;
  }
}
