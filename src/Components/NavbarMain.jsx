import {
    Box,
    Flex,
    Image,
    Button,
    Text


} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { Tabs } from './TopNavComponents/Tabs'
import { TabsB } from './TopNavComponents/TabsB'
import { TabPopUp } from './TopNavComponents/TabPopUp'
import { useState, useEffect, useRef } from 'react';
import customerData from '../Data/TopNavbar_Customer-Service.json'
import ItsupportData from '../Data/TopNavbar_IT_Support.json'
import OpsupportData from '../Data/TopNavbar_Operations_Support.json'
import { Features } from './SubNav_components/Features'
import { Pricing } from './SubNav_components/Pricing'
import { Resources } from './SubNav_components/Resources'
import { Solutions } from './SubNav_components/Solutions'

const tabLayout = {
    minW: 'fit-content',
    h: '100%',
    p: '25px 35px'
}

export const NavbarMain = () => {

    const [active, setActive] = useState(null);
    const [scroll, setScroll] = useState(false);
    const timeOut = useRef(null)


    window.onscroll = function () {
        if (window.scrollY > 150) {
            setScroll(true);
            setActive(null)

        } else {
            setScroll(false)
        }


    }
    // console.log(customerData)
    return <Box className='stickTop0'>
        {/* main Navbar */}
        {scroll ? null : <Flex justify={'space-between'} bg='#f4f6f6' color={'grey'} align='center' p='0 75px'>
            <NavLink to='/'>
                <Box>
                    <Image src='https://assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg' alt='logo' />
                </Box>
            </NavLink>
            <Flex display={['none', 'none', 'flex']} justify={'space-around'} w='70%'>
                <Tabs text='Customer Service' name='show1' active={active} setActive={setActive}><TabPopUp type='A' data={customerData} /></Tabs>
                <Tabs text='IT Support' name='Show2' active={active} setActive={setActive}><TabPopUp type='A' data={ItsupportData} /></Tabs>
                <Tabs text='Operations Support' name='Show3' active={active} setActive={setActive}><TabPopUp type='A' data={OpsupportData} /></Tabs>
            </Flex>
            <NavLink to='/login'><Box {...tabLayout}>Login</Box></NavLink>

        </Flex>}


        {/* Sub Navbar */}
        <Flex justify={'space-between'} boxShadow='lg' align='center' bg='#ffffff' color={'grey'} p='10px 75px' mb='0'>
            <NavLink to='/'>
                <Box>
                    <Image w={['120px']} src='https://assets.www.happyfox.com/v2/images/site-nav/helpdesk-logo.svg' alt='logo' />
                </Box>
            </NavLink>
            <Flex display={['none', 'none', 'flex']} justify={'space-around'} w='70%'>
                <TabsB text='Features' name='show4' active={active} setActive={setActive}><Features /></TabsB>
                <TabsB text='Solutions' name='Show5' active={active} setActive={setActive}><Solutions /></TabsB>
                <TabsB text='Pricing' name='Show6' active={active} setActive={setActive}><Pricing /></TabsB>
                <TabsB text='Resources' name='Show7' active={active} setActive={setActive}><Resources /></TabsB>
            </Flex>
            <NavLink to='/signup'><Box bg='#ef4f12' fontSize={'14px'} color='#fff' p='7px 10px' borderRadius={'10px'}>Get a Demo</Box></NavLink>

        </Flex>

    </Box>
}