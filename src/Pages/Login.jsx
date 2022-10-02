import {
    Box, Flex, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input, Heading,
    Image,
    Checkbox

} from "@chakra-ui/react"
import { useRef, useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../Contexts/AuthContext'
import { Footer } from '../Components/HomePageMain_Components/Footer'
import axios from "axios"
import { checkUser } from "../Functions/login"

export const Login = () => {

    const inpEmail = useRef(null);
    const inpPass = useRef(null);
    const [loginStatus, setlgStatus] = useState(false);
    const navigator = useNavigate();

    const { auth, login } = useContext(AuthContext);


    useEffect(() => {
        if (auth.status) {
            navigator('/');
        }
    }, [])

    const submitForm = async () => {
        let userData = {
            email: inpEmail.current.value,
            password: inpPass.current.value
        }
        let response = await checkUser(userData);


        if (!response.userStatus) {
            alert('wrong username')
        } else if (!response.passStatus) {
            alert('Wrong Password')
        } else if (response.passStatus) {
            console.log(response)
            alert(`Successfully logged in as ${response.user.name}`);
            login(response.user);
            navigator('/');

        } else {
            alert('something Went wrong please try again')
        }

    }




    return <Box>
        <Flex direction={['row']} m='auto'>
            <Box w={['95%', '93%', '90%', '50%']} pt='100px' mx='auto' >
                < Box w={['90%', '90%', '90%', '500px']} maxW='500px' m=' auto auto 150px' borderRadius='25px' shadow={'lg'} border='1px solid rgb(235,235,235)' p='35px' >


                    <Image w='100px' position={'absolute'} mt='-100px' transform={'translate(280px,0)'}
                        src='https://assets.happyfoxchat.com/v2/agent/images/18873ce36f62c5ace5e98f4b564cfd66.png' />

                    <Heading w='fit-content' m='auto' mb='35px' fontWeight='500'>Log into <br /> HappyFox Help Desk</Heading>

                    <FormControl display={'flex'} flexDirection='column' align='center'>

                        <FormLabel>Email address</FormLabel>
                        <Input type='email' ref={inpEmail} mb='25px' placeholder='Enter Your Email Here' />

                        <FormLabel>Password</FormLabel>
                        <Input type='password' ref={inpPass} placeholder='Enter Password' />

                        <Checkbox defaultChecked m='25px auto'>Keep Me Signed in</Checkbox>

                        <Input onClick={submitForm} type='submit' className="demoButton" value='Sign In' />

                    </FormControl>
                </Box>
            </Box >



            <Box display={['none', 'none', 'none', 'block']} p='15px' w='50%'> <Box w='100%' h='100%' backgroundRepeat={'no-repeat'} backgroundSize='cover' backgroundImage={'url("https://assets.www.happyfox.com/v2/images/chatbot-bg.png")'}></Box></Box>

        </Flex >

        <Footer hide={true} />
    </Box >
}