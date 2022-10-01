import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react"
import data from '../../Data/Footer.json';
import { NavLink } from 'react-router-dom'

const style = {
    list: {
        head: {
            color: '#fff',
            fontSize: '18px',
            fontWeight: '700'
        }
    }
}

export const Footer = ({ hide }) => {
    return <Box bg='#000' p='20px'>
        {hide ? null : <Flex direction='column' h='650px' justify={'flex-start'} wrap='wrap' p='15px 65px'>
            {data.map((item, e) => <Box key={e + 'typeFooterB'} textAlign='left' m='auto' w='17%'>
                <Text mb='20px' key={e + 'typeFooter'} {...style.list.head}>
                    {item.head}
                </Text>
                {item.subs.map((it, j) => <Text color='grey' className="textHoverFFF" fontSize='13px' cursor={'pointer'} mb='10px' key={item.head + j}>{it}</Text>)}
            </Box>)}
        </Flex>}
        <Flex justify={'space-around'} color='grey' width='80%' m='auto' mb='25px' borderTop='1px solid grey' borderBottom='1px solid grey' p='20px 30px'>
            <NavLink key='asdasd' to='/' style={{ display: 'flex', alignItems: 'center' }}><Image src='https://assets.www.happyfox.com/v2/images/bottom-footer/helpdesk-footer.svg' /><Text fontSize={'12px'}>Help Desk</Text></NavLink>
            <NavLink key='asdasd1' style={{ display: 'flex', alignItems: 'center' }}><img src='https://assets.www.happyfox.com/v2/images/bottom-footer/hf-assist-ai-footer.svg' /><Text fontSize={'12px'}>Assist AI</Text></NavLink>
            <NavLink key='asdasd2' style={{ display: 'flex', alignItems: 'center' }}><img src='https://assets.www.happyfox.com/v2/images/bottom-footer/livechat-footer.svg' /><Text fontSize={'12px'}>Live Chat</Text></NavLink>
            <NavLink key='asdasd3' style={{ display: 'flex', alignItems: 'center' }}><img src='https://assets.www.happyfox.com/v2/images/bottom-footer/chatbot-footer.svg' /><Text fontSize={'12px'}>Chat Box</Text></NavLink>
            <NavLink key='asdasd4' style={{ display: 'flex', alignItems: 'center' }}><img src='https://assets.www.happyfox.com/v2/images/bottom-footer/bi-footer.svg' /><Text fontSize={'12px'}>Business Inteligence</Text></NavLink>
            <NavLink key='asdasd5' style={{ display: 'flex', alignItems: 'center' }}><img src='https://assets.www.happyfox.com/v2/images/bottom-footer/workflows-footer.svg' /><Text fontSize={'12px'}>WorkFlows</Text></NavLink>
            <NavLink key='asdasd6' style={{ display: 'flex', alignItems: 'center' }}> <img src='https://assets.www.happyfox.com/v2/images/bottom-footer/inapp-chat-footer.svg' /><Text fontSize={'12px'}>In-App Chat</Text></NavLink>
        </Flex>
        <Flex justify='space-around' p='35px'>
            <Box color='grey'>
                <Text>Dev: Lokesh Vyavhare (Clone Project Edu. Purpose Only)</Text>
                <Text>Contact: lokeshvyavhare23@gmail.com</Text>
            </Box>
            <Flex justify='space-evenly' width='200px'>
                <Image key='1asdasd' w='25px' src='https://assets.www.happyfox.com/v2/images/facebook-logo-button1x.svg' />
                <Image key='2asdasd' w='25px' src='https://assets.www.happyfox.com/v2/images/twitter1x.svg' />
                <Image key='3asdasd' w='25px' src='https://assets.www.happyfox.com/v2/images/youtube1x.svg' />
                <Image key='4asdasd' w='25px' src='https://assets.www.happyfox.com/v2/images/bottom-footer/linkedin-logo-button.svg' />
            </Flex>
            <Text color='grey'>Copyright ©2022 HappyFox Inc. All rights reserved.</Text>
        </Flex>
    </Box >
}