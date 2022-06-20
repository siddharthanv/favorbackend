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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_credentials_dto_1 = require("./dto/auth-credentials.dto");
const get_service_person_filter_dto_1 = require("./dto/get-service-person-filter.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signUp(authCredentialsDto) {
        return this.authService.signUp(authCredentialsDto);
    }
    signIn(authCredentialsDto2) {
        return this.authService.signIn(authCredentialsDto2);
    }
    userUpdate(id, updateUserStatusDto) {
        const { userStatus } = updateUserStatusDto;
        return this.authService.userStatusUpdate(id, userStatus);
    }
    getServicePersons(filterDto) {
        return this.authService.getServicePerson(filterDto);
    }
};
__decorate([
    common_1.Post('/signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    common_1.Post('/signin'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto2]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    common_1.Post('/:id/user-status-update'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_credentials_dto_1.UpdateUserStatusDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "userUpdate", null);
__decorate([
    common_1.Get('/getServicePersonsList'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_service_person_filter_dto_1.GetFilterServicePerson]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getServicePersons", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map