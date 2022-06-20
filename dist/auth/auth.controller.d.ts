import { AuthService } from './auth.service';
import { AuthCredentialsDto, AuthCredentialsDto2, UpdateUserStatusDto } from './dto/auth-credentials.dto';
import { GetFilterServicePerson } from './dto/get-service-person-filter.dto';
import { User } from './user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto2: AuthCredentialsDto2): Promise<{
        accessToken: string;
    }>;
    userUpdate(id: string, updateUserStatusDto: UpdateUserStatusDto): Promise<void>;
    getServicePersons(filterDto: GetFilterServicePerson): Promise<User[]>;
}
