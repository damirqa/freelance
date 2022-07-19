import {IsEmail, IsString, Length} from "class-validator";
import { Match } from "../decorators/match.decorator";

export class RequestCreateUserDto {

    @IsString({message: 'Должно быть строкой'})
    readonly username: string;

    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: "Неверно оформлена"})
    readonly email: string;

    @Length(8, 16, {message: "Не меньше 8 и не больше 16 символов"})
    readonly password: string;

    @Match('password', {message: 'Пароли не совпадают'})
    readonly confirm_password: string;
}