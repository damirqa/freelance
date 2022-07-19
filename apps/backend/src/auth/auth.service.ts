import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto} from "../user/dto/create-user.dto";
import {UserService} from "../user/user.service";

import * as bcrypt from 'bcrypt'
import {RequestCreateUserDto} from "./dto/request-create-user.dto";
import {User} from "../user/user.model";
import {JwtService} from "@nestjs/jwt";
import {RequestLoginUserDto} from "./dto/request-login-user.dto";

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
                private jwtService: JwtService) {
    }

    async registration(userDto: RequestCreateUserDto) {
        const candidate = await this.userService.getUserByUsernameAndEmail(userDto.username, userDto.email);
        if (candidate) {
            throw new HttpException('Пользователь с таким username или email уже существует', HttpStatus.BAD_REQUEST);
        }

        if (userDto.password !== userDto.confirm_password) {
            throw new HttpException('Пароли не совпадают', HttpStatus.BAD_REQUEST);
        }
        const password_hash = await bcrypt.hash(userDto.password, 5);

        const createUser: CreateUserDto = { username: userDto.username, email: userDto.email, password_hash }
        const user = await this.userService.createUser(createUser);

        return this.generateToken(user);
    }

    async login(userDto: RequestLoginUserDto) {
        const candidate = await this.userService.getUserByUsername(userDto.username);
        const compared = bcrypt.compareSync(userDto.password, candidate.password_hash)

        if (!candidate || !compared) throw new HttpException('Неверный логин или пароль', HttpStatus.BAD_REQUEST);

        return this.generateToken(candidate);
    }

    private generateToken(user: User) {
        const payload = { id: user.id, username: user.username, email: user.email }
        return { token: this.jwtService.sign(payload)}
    }

}
