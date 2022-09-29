import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { Tabs } from '../TopNavComponents/Tabs'
import { useState } from 'react'
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
    return <Box bg='#fff' >
        <Flex justify={'space-around'} w='70%' m='auto'>
            <TabsQ text='Keep everything together' name='show1' active={active} setActive={setActive} >
                <Flex className="popupFlex">
                    <Box className="popupImgBox"><Image src='https://assets.www.happyfox.com/v2/images/keep_everything.svg' /></Box>
                    <Box className="popupTxtBox">
                        <Text {...styles.title}><q>We consider HappyFox a one-stop shop for help desk software to support our global
                            customer network</q></Text>
                        <Text {...styles.sub}>Martin Hartvigsen <br />Director, Global Technical Support at Jabra GN</Text>
                    </Box>
                </Flex>
            </TabsQ>


            <TabsQ text='Stay in Control' name='show2' active={active} setActive={setActive} >
                <Flex className="popupFlex">
                    <Box className="popupImgBox"><Image src='https://assets.www.happyfox.com/v2/images/stay_control.svg' /></Box>
                    <Box className="popupTxtBox">
                        <Text {...styles.title}><q>We LOVE HappyFox. It has changed our work lives. Support requests no longer fall
                            through the cracks and get lost in an email or some random spreadsheet.</q></Text>
                        <Text {...styles.sub}>Bill Bates<br />Director of Technology - Pinewood Private School</Text>
                    </Box>
                </Flex>
            </TabsQ>


            <TabsQ text='Get things done, fast' name='show3' active={active} setActive={setActive} >
                <Flex className="popupFlex">
                    <Box className="popupImgBox"><Image src='https://assets.www.happyfox.com/v2/images/things_fast.svg' /></Box>
                    <Box className="popupTxtBox">
                        <Text {...styles.title}><q>With 95% of the support tickets being responded to within 2 hours. Our customers
                            are impressed!</q></Text>
                        <Text {...styles.sub}>James Powell<br />Director & IT Business Consultant - FatCat IT</Text>
                    </Box>
                </Flex>
            </TabsQ>
        </Flex>
    </Box>
}