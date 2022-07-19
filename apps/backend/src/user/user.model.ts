import {Column, DataType, Model, Table} from "sequelize-typescript";

interface UserCreateAttrs {
    username: string;
    email: string;
    password: string;
    confirm_password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreateAttrs>{

    @Column({type: DataType.BIGINT, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    password_hash: string;

    @Column({type: DataType.STRING, allowNull: true})
    password_reset_token: string;

    @Column({type: DataType.BOOLEAN, defaultValue: false})
    active: boolean;
}