import {Box, Button, Center, FormControl, FormLabel, Heading, Input, useToast} from '@chakra-ui/react';
import React, {useState} from 'react';
import {login, LoginForm} from "../../http/auth";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const toast = useToast();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const loginForm: LoginForm = { username, password };

        try {
            await login(loginForm)
            toast({
                description: 'Авторизация прошла успешна. Сейчас Вы будете перенаправлены на главную страницу',
                status: "success",
                duration: 3000
            })

            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
        catch (e: any) {
            toast({
                description: e.response.data.message,
                status: "error",
                duration: 9000,
                isClosable: true
            })
        }
    }

    return (
        <Center h='100vh'>
            <Box w='33%' p='5' boxShadow='lg' borderRadius='10'>
                <Heading as='h1' textAlign='center' mb='7'>Login to your account</Heading>

                <form>
                    <FormControl mb='5'>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input id='username' type='text' onChange={event => setUsername(event.target.value)}/>
                    </FormControl>

                    <FormControl mb='5'>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input id='password' type='password' onChange={event => setPassword(event.target.value)}/>
                    </FormControl>

                    <Button w='100%' colorScheme='blue' onClick={handleSubmit}>Login</Button>
                </form>
            </Box>
        </Center>
    );
};

export default Login;