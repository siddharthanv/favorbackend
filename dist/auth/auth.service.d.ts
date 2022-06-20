import { AuthCredentialsDto, AuthCredentialsDto2 } from './dto/auth-credentials.dto';
import { UsersRepository } from './users.repository';
import { JwtService } from '@nestjs/jwt';
import { AuthUserStatus } from './auth-user-status.enum';
import { User } from './user.entity';
import { GetFilterServicePerson } from './dto/get-service-person-filter.dto';
export declare class AuthService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto2: AuthCredentialsDto2): Promise<{
        accessToken: string;
        firstName: string;
        userType: string;
    }>;
    userStatusUpdate(id: string, userStatus: AuthUserStatus): Promise<void>;
    getServicePerson(filterDto: GetFilterServicePerson): Promise<User[]>;
}
