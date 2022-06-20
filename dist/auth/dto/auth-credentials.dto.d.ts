import { AuthGender } from '../auth-gender.enum';
import { AuthSkillType } from '../auth-skill-type.enum';
import { AuthUserStatus } from '../auth-user-status.enum';
import { AuthUserType } from '../auth-user-type.enum';
export declare class AuthCredentialsDto {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    gender: AuthGender;
    mobileNumber: string;
    userType: AuthUserType;
    skillType: AuthSkillType;
    experience: string;
    aadhar: string;
    pan: string;
    userStatus: AuthUserStatus;
}
export declare class AuthCredentialsDto2 {
    mobileNumber: string;
    password: string;
}
export declare class UpdateUserStatusDto {
    userStatus: AuthUserStatus;
}
