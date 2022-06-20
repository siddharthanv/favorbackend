"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserStatusDto = exports.AuthCredentialsDto2 = exports.AuthCredentialsDto = void 0;
const class_validator_1 = require("class-validator");
const auth_gender_enum_1 = require("../auth-gender.enum");
const auth_skill_type_enum_1 = require("../auth-skill-type.enum");
const auth_user_status_enum_1 = require("../auth-user-status.enum");
const auth_user_type_enum_1 = require("../auth-user-type.enum");
class AuthCredentialsDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(4),
    class_validator_1.MaxLength(40),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(8),
    class_validator_1.MaxLength(32),
    class_validator_1.Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password is too weak',
    }),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "password", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(4),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "firstName", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(1),
    class_validator_1.MaxLength(20),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "lastName", void 0);
__decorate([
    class_validator_1.IsEnum(auth_gender_enum_1.AuthGender),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "gender", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(10),
    class_validator_1.MaxLength(10),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "mobileNumber", void 0);
__decorate([
    class_validator_1.IsEnum(auth_user_type_enum_1.AuthUserType),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "userType", void 0);
__decorate([
    class_validator_1.IsEnum(auth_skill_type_enum_1.AuthSkillType),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "skillType", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "experience", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(12),
    class_validator_1.MaxLength(12),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "aadhar", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "pan", void 0);
__decorate([
    class_validator_1.IsEnum(auth_user_status_enum_1.AuthUserStatus),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "userStatus", void 0);
__decorate([
    class_validator_1.IsArray(),
    __metadata("design:type", Array)
], AuthCredentialsDto.prototype, "pincodeMapping", void 0);
exports.AuthCredentialsDto = AuthCredentialsDto;
class AuthCredentialsDto2 {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(10),
    class_validator_1.MaxLength(10),
    __metadata("design:type", String)
], AuthCredentialsDto2.prototype, "mobileNumber", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MinLength(8),
    class_validator_1.MaxLength(32),
    __metadata("design:type", String)
], AuthCredentialsDto2.prototype, "password", void 0);
exports.AuthCredentialsDto2 = AuthCredentialsDto2;
class UpdateUserStatusDto {
}
__decorate([
    class_validator_1.IsEnum(auth_user_status_enum_1.AuthUserStatus),
    __metadata("design:type", String)
], UpdateUserStatusDto.prototype, "userStatus", void 0);
exports.UpdateUserStatusDto = UpdateUserStatusDto;
//# sourceMappingURL=auth-credentials.dto.js.map