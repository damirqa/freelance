import {Box, Button, Center, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';
import React, {useState} from 'react';
import {registration, RegistrationForm} from "../../http/auth";
import {useNavigate} from "react-router-dom";

const Registration = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    const toast = useToast();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const registrationForm: RegistrationForm = {username, email, password, confirm_password};

        try {
            await registration(registrationForm);
            toast({
                description: 'Вы успешно зарегистрированы. Сейчас Вы будете перенаправлены на главную страницу',
                status: "success",
                duration: 3000
            })

            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
        catch (e: any) {
            e.response.data.forEach((item: any) => {
                toast({
                    description: item,
                    status: "error",
                    duration: 9000,
                    isClosable: true
                })
            })
        }
    }

    return (
        <Center h='100vh'>
            <Box w='33%' p='5' boxShadow='lg' borderRadius='10'>
                <Heading as='h1' textAlign='center' mb='7' >Create Your Account</Heading>

                <form>
                    <FormControl mb='5'>
                        <FormLabel htmlFor='username'>Username</FormLabel>
                        <Input id='username' type='text' onChange={event => setUsername(event.target.value)}/>
                    </FormControl>

                    <FormControl mb='5'>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Input id='email' type='email' onChange={event => setEmail(event.target.value)}/>
                    </FormControl>

                    <FormControl mb='5'>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Input id='password' type='password' onChange={event => setPassword(event.target.value)}/>
                    </FormControl>

                    <FormControl mb='5'>
                        <FormLabel htmlFor='confirm_password'>Confirm Password</FormLabel>
                        <Input id='confirm_password' type='password' onChange={event => setConfirmPassword(event.target.value)}/>
                    </FormControl>

                    <Button w='100%' colorScheme='blue' onClick={handleSubmit}>Sign up</Button>
                </form>
            </Box>
        </Center>
    );
};

export default Registration;