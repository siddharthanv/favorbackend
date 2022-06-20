import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { GetFilterServicePerson } from './dto/get-service-person-filter.dto';
export declare class UsersRepository extends Repository<User> {
    createUser(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    getServicePerson(filterDto: GetFilterServicePerson): Promise<User[]>;
}
