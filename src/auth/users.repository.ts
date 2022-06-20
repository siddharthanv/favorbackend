import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { GetFilterServicePerson } from './dto/get-service-person-filter.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const {
      username,
      password,
      firstName,
      lastName,
      gender,
      mobileNumber,
      userType,
      skillType,
      experience,
      aadhar,
      pan,
      userStatus,
    } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      password: hashedPassword,
      firstName,
      lastName,
      gender,
      mobileNumber,
      userType,
      skillType,
      experience,
      aadhar,
      pan,
      userStatus,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        // duplicate username
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async getServicePerson(filterDto: GetFilterServicePerson): Promise<User[]> {
    const { skillType, search, userType } = filterDto;

    const query = this.createQueryBuilder('servicePerson');

    query.andWhere('servicePerson.userType = :userType', { userType });

    if (skillType) {
      query.andWhere('servicePerson.skillType = :skillType', { skillType });
    }

    if (search) {
      query.andWhere(
        '(LOWER(servicePerson.firstName) LIKE LOWER(:search) OR LOWER(task.lastName) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    const servicePersons = await query.getMany();
    return servicePersons;
  }
}
