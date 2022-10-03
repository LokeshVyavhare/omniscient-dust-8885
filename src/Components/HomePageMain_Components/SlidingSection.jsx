import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react"
import { Tabs } from '../TopNavComponents/Tabs'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TabsQ } from './TabsQ'
import './TabQ.css'

const styles = {
    title: {
        color: 'rgb(70,70,70)',
        fontSize: '18px',
        fontWeight: '700',
        mb: '20px'
    },
    sub: {
        color: 'grey',
        fontSize: '15px',
    }
}

export const SlidingSection = () => {
    const [active, setActive] = useState('show1');
    return <Box bg='#fff' p='35px 0' textAlign={'center'} >

        <Box w={{ base: '90%', sm: '90%', md: '70%', lg: '60%' }} m='0 auto 30px'>
            <Heading fontWeight={'500'} mb='20px'>Provide Exceptional</Heading>
            <Heading fontWeight={'700'} mb='20px'>Customer Support. Everyday.</Heading>
            <Text mb='20px' fontSize={'15px'} color='grey'>Meet HappyFox, a practical help desk and customer support software solution. Reduce chaos and bring order to your support process with a robust support ticket system, self-service knowledge base and community forums.</Text>
        </Box>


        <Box m='3em auto' w={['500px']}>
            <NavLink to='/signup'><Box className='demoButton'>Get a Demo</Box></NavLink>
        </Box>
        <Flex justify={'space-around'} w={{ base: '90%', sm: '90%', md: '80%', lg: '70%' }} m='auto'>
            <TabsQ text='Keep everything together' name='show1' active={active} setActive={setActive} >
            </TabsQ>


            <TabsQ text='Stay in Control' name='show2' active={active} setActive={setActive} >

            </TabsQ>


            <TabsQ text='Get things done, fast' name='show3' active={active} setActive={setActive} >

            </TabsQ>



        </Flex>
        <Box className='popup'>{active === 'show1' ? <Flex className="popupFlex" w={{ base: '95%', sm: '93%', md: '90%', lg: '85%' }} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
            <Box className="popupImgBox" w='100%'><Image src='https://assets.www.happyfox.com/v2/images/keep_everything.svg' /></Box>
            <Box className="popupTxtBox" w='100%'>
                <Text {...styles.title}><q>We consider HappyFox a one-stop shop for help desk software to support our global
                    customer network</q></Text>
                <Text {...styles.sub}>Martin Hartvigsen <br />Director, Global Technical Support at Jabra GN</Text>
            </Box>
        </Flex> : active === 'show2' ? <Flex className="popupFlex" w={{ base: '95%', sm: '93%', md: '90%', lg: '85%' }} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
            <Box className="popupImgBox" w='100%'><Image src='https://assets.www.happyfox.com/v2/images/stay_control.svg' /></Box>
            <Box className="popupTxtBox" w='100%'>
                <Text {...styles.title}><q>We LOVE HappyFox. It has changed our work lives. Support requests no longer fall
                    through the cracks and get lost in an email or some random spreadsheet.</q></Text>
                <Text {...styles.sub}>Bill Bates<br />Director of Technology - Pinewood Private School</Text>
            </Box>
        </Flex> : active === 'show3' ? <Flex className="popupFlex" w={{ base: '95%', sm: '93%', md: '90%', lg: '85%' }} direction={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}>
            <Box className="popupImgBox" w='100%'><Image src='https://assets.www.happyfox.com/v2/images/things_fast.svg' /></Box>
            <Box className="popupTxtBox" w='100%'>
                <Text {...styles.title}><q>With 95% of the support tickets being responded to within 2 hours. Our customers
                    are impressed!</q></Text>
                <Text {...styles.sub}>James Powell<br />Director & IT Business Consultant - FatCat IT</Text>
            </Box>
        </Flex> : null}</Box>

    </Box >
}