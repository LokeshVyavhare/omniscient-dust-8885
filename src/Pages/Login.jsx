import {
    Box, Flex, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input, Heading,
    Image,
    Checkbox

} from "@chakra-ui/react"
import { Footer } from '../Components/HomePageMain_Components/Footer'
import { NavbarMain } from "../Components/NavbarMain"

export const Login = () => {
    return <Box>
        <Flex>
            <Box w='50%' pt='100px'>
                <Box w={['500px']} m=' auto auto 150px' borderRadius='25px' shadow={'lg'} border='1px solid rgb(235,235,235)' p='35px'>


                    <Image w='100px' position={'absolute'} mt='-100px' transform={'translate(280px,0)'}
                        src='https://assets.happyfoxchat.com/v2/agent/images/18873ce36f62c5ace5e98f4b564cfd66.png' />

                    <Heading w='fit-content' m='auto' mb='35px' fontWeight='500'>Log into <br /> HappyFox Help Desk</Heading>

                    <FormControl display={'flex'} flexDirection='column' align='center'>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' mb='25px' placeholder='Enter Your Email Here' />
                        <FormLabel>Password</FormLabel>
                        <Input type='password' placeholder='Enter Password' />
                        <Checkbox defaultChecked m='25px auto'>Keep Me Signed in</Checkbox>
                        <Input type='submit' w='100px' bg='#ef4f12' color='#fff' m='30px auto 10px' value='Sign In' />
                    </FormControl>
                </Box>
            </Box>



            <Box w='50%' backgroundRepeat={'no-repeat'} backgroundSize='100%' backgroundImage={'url("https://assets.www.happyfox.com/v2/images/chatbot-bg.png")'}></Box>
        </Flex>

        <Footer hide={true} />
    </Box>
}