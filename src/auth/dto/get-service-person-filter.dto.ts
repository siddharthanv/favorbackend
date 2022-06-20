import { IsEnum, IsOptional, IsString } from 'class-validator';
import { AuthSkillType } from '../auth-skill-type.enum';

export class GetFilterServicePerson {
  @IsOptional()
  @IsEnum(AuthSkillType)
  skillType?: AuthSkillType;

  @IsOptional()
  @IsString()
  search?: string;

  @IsString()
  userType?: string;
}
