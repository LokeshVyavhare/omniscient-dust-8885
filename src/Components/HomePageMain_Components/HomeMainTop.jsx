import {
    Box, Flex, Heading, InputGroup, InputRightAddon, Input, Text,
    Image,
} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
import { Icon } from '@chakra-ui/react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { useState } from "react"
import { SlidingSection } from '../HomePageMain_Components/SlidingSection'

const styles = {
    container: {
        bg: 'rgb(245,245,245)',
        mt: '0',
        pt: '35px'
    },
    sec1: {
        box: {
            direction: 'column',
            align: 'center',
            fontFamily: 'hero-new,sans-serif',
            w: ['90%', '80%', '70%', '42%'],
            p: '20px',
            m: 'auto',
            textAlign: 'center'

        },
        heading: {

        },
        text: {

        },
        inpGrp: {

        },
        inpAdd: {

        }, inp: {

        }
    }
}

export const HomeMainTop = () => {
    const [play, setPlay] = useState(true);

    return <Box {...styles.container}>
        {/* Section 1 */}
        <Flex {...styles.sec1.box}>
            <Heading w='100%' fontSize='48px' fontWeight='700' fontFamily='inherit' mb='25px'>Get More Done with a Modern Support Stack</Heading>
            <Text w='90%' color='grey' mb='25px'>Deliver outstanding support and achieve new goals with HappyFox.</Text>

            {/* <InputGroup w='90%' border='1px solid #f16631' size='lg' borderRadius={'10px'} >
            <Input type='email' placeholder='Enter Your Work Email' p='30px' />
            <InputRightAddon color='#fff' w='30%' bg='#f16631' p='30px' children={<NavLink to='/signup'>Get A demo</NavLink>} />
            </InputGroup> */}
        </Flex>

        {/* Youtube vid */}
        <Box w={['80%']} h={['600px']} m='35px auto' borderRadius='35px' boxShadow={'dark-lg'}>
            {play ?
                <Box borderRadius='35px' onClick={() => { setPlay(false) }} w='100%' h='100%' p='35px' textAlign='center' backgroundImage={'https://assets.www.happyfox.com/v2/images/version_2_cover_new.jpg'} backgroundSize='100%'>
                    <Flex p='7px 14px' borderRadius={'15px'} w='fit-content' className="hov_blk_trans_back" align='center' m='auto'><Icon boxSize={'30px'} as={AiFillPlayCircle} mr='15px' /><Text fontSize='20px' fontWeight='700'> Watch The Video</Text></Flex>
                </Box> :
                <iframe borderRadius='35px' width="100%" height="100%" src="https://www.youtube.com/embed/cD0FfdHdNis?autoplay=0&controls=0"></iframe>}
        </Box>
        {/* sec3 */}
        <Box p='100px 0 0'>
            <Flex direction='column' align={'center'} w='60%' m='auto' textAlign={'center'}>
                <Box mb='25px'><Image src='https://assets.www.happyfox.com/v2/images/pcmag-new-2021.svg?r=1664427113311' /></Box>
                <Box mb='25px'><Heading>Best Help Desk Software for 6 years in a row.</Heading></Box>
                <Box w='50%' mb='25px'><Text color='grey'>All-in-one <Text display='inline' cursor='pointer' fontWeight={'700'} color='black'>help desk ticketing system</Text> that provides faster and better support for your customers..</Text></Box>
                <Box mb='25px' border='2px solid black' fontWeight={'700'} borderRadius={'10px'} padding='7px 14px' cursor='pointer' w='fit-content'>Take Tour</Box>
            </Flex>
        </Box>
        {/* sec4 */}
        <Box p='100px 0'>
            <Box textAlign={'center'}>
                <Text>Trusted by Industry-Leading Companies</Text>
                <Flex align='center' justify={'space-around'} w='80%' m='auto'>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/owler-logo.png' /></Box>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/whirlpool.svg' /></Box>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/jabra.svg' /></Box>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/leap-frog.svg' /></Box>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/harbour.svg' /></Box>

                </Flex>
            </Box>
        </Box>
        {/* Sectoion 5 */}
        <Box mb='350px'>
            <SlidingSection />
        </Box>
        {/* Section 6 */}
        <Box className='grad' w='100%' h='100vh' overflow={'hidden'}>
           

        </Box>

    </Box>
}