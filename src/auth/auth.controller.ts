import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  AuthCredentialsDto,
  AuthCredentialsDto2,
  UpdateUserStatusDto,
} from './dto/auth-credentials.dto';
import { GetFilterServicePerson } from './dto/get-service-person-filter.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto2: AuthCredentialsDto2,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto2);
  }

  @Post('/:id/user-status-update')
  userUpdate(
    @Param('id') id: string,
    @Body() updateUserStatusDto: UpdateUserStatusDto,
  ): Promise<void> {
    const { userStatus } = updateUserStatusDto;
    return this.authService.userStatusUpdate(id, userStatus);
  }

  @Get('/getServicePersonsList')
  getServicePersons(
    @Query() filterDto: GetFilterServicePerson,
  ): Promise<User[]> {
    return this.authService.getServicePerson(filterDto);
  }
}
