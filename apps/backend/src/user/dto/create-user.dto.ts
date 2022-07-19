export class CreateUserDto {
    readonly username: string;
    readonly email: string;
    readonly password_hash: string;
}