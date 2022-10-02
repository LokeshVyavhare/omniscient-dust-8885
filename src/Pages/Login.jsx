import {
    Box, Flex, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input, Heading,
    Image,
    Checkbox

} from "@chakra-ui/react"
import { useRef, useState } from "react"
import { Footer } from '../Components/HomePageMain_Components/Footer'
import axios from "axios"

export const Login = () => {

    const inpEmail = useRef(null);
    const inpPass = useRef(null);
    const [loginStatus, setlgStatus] = useState(false);


    const submitForm = () => {
        axios.get(`https://lv-23-mock-servertest.onrender.com/users`).then((res) => {


            const user = res.data.filter((i) => inpEmail.current.value === i.email)[0]

            if (user === undefined) {
                setlgStatus(true);
            } else if (user.pass !== inpPass.current.value) {

            } else if (user.pass === inpPass.current.value) {

            }
            inpEmail.current.value = ''
            inpPass.current.value = '';
        })

    }




    return <Box>
        <Flex direction={['row']} m='auto' h='90vh'>
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