import {$host} from "./index";

export interface RegistrationForm {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
}

export interface LoginForm {
    username: string;
    password: string;
}

export const registration = async (form: RegistrationForm) => {
    const { data } = await $host.post('auth/registration', form);
    localStorage.setItem('token', data.token);
    return data;
}

export const login = async (form: LoginForm) => {
    const { data } = await $host.post('auth/login', form);
    localStorage.setItem('token', data.token);
    return data;
}