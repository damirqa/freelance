import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./user.model";
import { Op } from 'sequelize';

@Injectable()
export class UserService {

    constructor(@InjectModel(User) private userRepository: typeof User) {
    }

    async createUser(userDto: CreateUserDto) {
        const user = await this.userRepository.create(userDto)
        return user;
    }

    async getUserByUsernameAndEmail(username: string, email: string) {
        const user = await this.userRepository.findOne({
            where: {
                [Op.or]: [
                    {username},
                    {email}
                ]
            },
            include: {all: true}
        });
        return user;
    }

    async getUserByUsername(username: string) {
        const user = await this.userRepository.findOne({
            where: {
                username
            }
        });
        return user;
    }
}
