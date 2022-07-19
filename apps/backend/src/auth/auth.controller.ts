import {Body, Controller, Post, UsePipes} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {RequestCreateUserDto} from "./dto/request-create-user.dto";
import {ValidationPipe} from "../pipes/validation.pipe";
import {RequestLoginUserDto} from "./dto/request-login-user.dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @UsePipes(ValidationPipe)
    @Post('/registration')
    registration(@Body() userDto: RequestCreateUserDto) {
        return this.authService.registration(userDto)
    }

    @Post('/login')
    login(@Body() userDto: RequestLoginUserDto) {
        return this.authService.login(userDto)
    }
}
