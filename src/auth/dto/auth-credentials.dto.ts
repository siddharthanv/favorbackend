import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { AuthGender } from '../auth-gender.enum';
import { AuthSkillType } from '../auth-skill-type.enum';
import { AuthUserStatus } from '../auth-user-status.enum';
import { AuthUserType } from '../auth-user-type.enum';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  @IsEmail()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  firstName: string;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  lastName: string;

  @IsEnum(AuthGender)
  gender: AuthGender;

  @IsString()
  @MinLength(10)
  @MaxLength(10)
  mobileNumber: string;

  @IsEnum(AuthUserType)
  userType: AuthUserType;

  @IsEnum(AuthSkillType)
  skillType: AuthSkillType;

  @IsString()
  experience: string;

  @IsString()
  @MinLength(12)
  @MaxLength(12)
  aadhar: string;

  @IsString()
  pan: string;

  @IsEnum(AuthUserStatus)
  userStatus: AuthUserStatus;

  @IsArray()
  pincodeMapping: string[];
}

export class AuthCredentialsDto2 {
  @IsString()
  @MinLength(10)
  @MaxLength(10)
  mobileNumber: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}

export class UpdateUserStatusDto {
  @IsEnum(AuthUserStatus)
  userStatus: AuthUserStatus;
}
