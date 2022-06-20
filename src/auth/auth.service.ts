import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AuthCredentialsDto,
  AuthCredentialsDto2,
  UpdateUserStatusDto,
} from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { AuthUserStatus } from './auth-user-status.enum';
import { User } from './user.entity';
import { GetFilterServicePerson } from './dto/get-service-person-filter.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(authCredentialsDto);
  }

  async signIn(
    authCredentialsDto2: AuthCredentialsDto2,
  ): Promise<{
    accessToken: string;
    firstName: string;
    userType: string;
    pincodeMapping: string[];
  }> {
    const { mobileNumber, password } = authCredentialsDto2;
    const user = await this.usersRepository.findOne({ mobileNumber });
    const firstName = user.firstName;
    const userType = user.userType;
    const pincodeMapping = user.pincodeMapping;

    if (
      user &&
      user.userStatus === 'ACTIVE' &&
      (await bcrypt.compare(password, user.password))
    ) {
      const payload: JwtPayload = { mobileNumber };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken, firstName, userType, pincodeMapping };
    } else {
      if (user.userStatus === 'ACTIVE') {
        throw new UnauthorizedException('Please check your login credentials');
      } else {
        throw new UnauthorizedException(
          `You are not authorized to access this site. You are in ${user.userStatus}.`,
        );
      }
    }
  }

  async userStatusUpdate(
    id: string,
    userStatus: AuthUserStatus,
  ): Promise<void> {
    const foundUser = await this.usersRepository.findOne({
      where: { id },
    });

    if (!foundUser) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    } else {
      foundUser.userStatus = userStatus;
      await this.usersRepository.save(foundUser);
    }
  }

  async getServicePerson(filterDto: GetFilterServicePerson): Promise<User[]> {
    return await this.usersRepository.getServicePerson(filterDto);
  }
}
