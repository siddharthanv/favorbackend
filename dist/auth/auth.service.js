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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_repository_1 = require("./users.repository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async signUp(authCredentialsDto) {
        return this.usersRepository.createUser(authCredentialsDto);
    }
    async signIn(authCredentialsDto2) {
        const { mobileNumber, password } = authCredentialsDto2;
        const user = await this.usersRepository.findOne({ mobileNumber });
        const firstName = user.firstName;
        const userType = user.userType;
        if (user &&
            user.userStatus === 'ACTIVE' &&
            (await bcrypt.compare(password, user.password))) {
            const payload = { mobileNumber };
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken, firstName, userType };
        }
        else {
            if (user.userStatus === 'ACTIVE') {
                throw new common_1.UnauthorizedException('Please check your login credentials');
            }
            else {
                throw new common_1.UnauthorizedException(`You are not authorized to access this site. You are in ${user.userStatus}.`);
            }
        }
    }
    async userStatusUpdate(id, userStatus) {
        const foundUser = await this.usersRepository.findOne({
            where: { id },
        });
        if (!foundUser) {
            throw new common_1.NotFoundException(`Task with ID "${id}" not found`);
        }
        else {
            foundUser.userStatus = userStatus;
            await this.usersRepository.save(foundUser);
        }
    }
    async getServicePerson(filterDto) {
        return await this.usersRepository.getServicePerson(filterDto);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map