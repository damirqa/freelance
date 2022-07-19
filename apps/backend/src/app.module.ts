import {Module} from "@nestjs/common";
import {Sequelize} from "sequelize-typescript";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {UsersController} from "./users/users.controller";
import { UserModule } from './user/user.module';
import {UserController} from "./user/user.controller";
import { AuthModule } from './auth/auth.module';

@Module({
    controllers: [UserController],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'qweqwe',
            database: 'freelance',
            models: [],
            autoLoadModels: true
        }),
        UsersModule,
        UserModule,
        AuthModule
    ],

})
export class AppModule {

}