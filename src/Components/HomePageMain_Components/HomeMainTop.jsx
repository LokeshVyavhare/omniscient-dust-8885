import {
    Box, Flex, Heading, InputGroup, InputRightAddon, Input, Text,
    Image,
    Grid,
    GridItem,
} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
import { Icon } from '@chakra-ui/react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { useState } from "react"
import { SlidingSection } from '../HomePageMain_Components/SlidingSection'

// 
const data_Ai = [
    {
        id: 'data_Ai1',
        image: 'https://assets.www.happyfox.com/v2/images/handle-icon.svg',
        text1: 'Handle all inbound requests in one ticketing system',
        text2: 'Convert email, phone, chat and web requests into tickets and keep them organized.'
    }, {
        id: 'data_Ai2',
        image: 'https://assets.www.happyfox.com/v2/images/outsource-icon.svg',
        text1: 'Ease your day with a smart help desk software',
        text2: 'Outsource complex and redundant workflows to a powerful smart rules engine.'
    }, {
        id: 'data_Ai3',
        image: 'https://assets.www.happyfox.com/v2/images/analyse-icon.svg',
        text1: 'Analyse help desk metrics & create solid actions',
        text2: 'A ticketing system that can crunch your support process data.'
    }, {
        id: 'data_Ai4',
        image: 'https://assets.www.happyfox.com/v2/images/setting-icon.svg',
        text1: 'Tailor your support ticket system in all forms',
        text2: 'Create your own custom fields, workflows & personalize the support experience.'
    }
]
const data_bs = [
    {
        id: 'data_bs1',
        bd: '#e2434b',
        image: 'https://assets.www.happyfox.com/v2/images/support-icon.svg',
        text1: 'For customer support',
        text2: 'A customer support tool that helps redefine your customer service and ensure customer loyalty.'
    }, {
        id: 'data_bs2',
        bd: '#08c299',
        image: 'https://assets.www.happyfox.com/v2/images/opration-icon.svg',
        text1: 'For IT operations',
        text2: 'Customer support tool that helps IT and ITES companies deliver outstanding support.'
    }, {
        id: 'data_bs3',
        bd: '#429ffd',
        image: 'https://assets.www.happyfox.com/v2/images/discuss-icon.svg',
        text1: 'For HR & Marketing',
        text2: 'Track and manage issues from your customers and provide speedy resolutions.'
    }, {
        id: 'data_bs4',
        bd: '#ef6c35',
        image: 'https://assets.www.happyfox.com/v2/images/team-icon.svg',
        text1: 'For all teams',
        text2: 'All-in-one help desk ticketing system that provides faster and better support for your customers.'
    }
]
const styles = {
    container: {
        bg: 'rgb(245,245,245)',
        width: '100%',

        m: 'auto',
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
    },
    sec6: {

        GridItem: {
            display: 'flex',
            justify: 'center',
            align: 'center',
            p: '30px',
            w: '80%',
            h: '200px',
            m: 'auto',
            borderRadius: '20px',
            bg: '#080816'

        },
        GridItemHover: {
            bg: '#000'
        },

        flex: {
            style: {

                align: 'flex-start',

            },
            image: {
                mr: '30px'
            },
            box: {
                style: {
                    textAlign: 'left',
                },
                text1: {
                    fontSize: '19px',
                    color: '#fff',
                    mb: '20px'
                },
                text2: {
                    fontSize: '16px',
                    color: 'grey'
                }
            }
        }
    },
    sec7: {

        GridItem: {
            display: 'flex',
            justify: 'center',
            align: 'center',
            p: '30px',
            w: '80%',
            h: '200px',
            m: 'auto',
            borderTop: '7px solid red',
            borderRadius: '7px',
            bg: '#ffffff'

        },
        GridItemHover: {
            bg: '#000'
        },

        flex: {
            style: {

                align: 'flex-start',

            },
            image: {
                mr: '30px'
            },
            box: {
                style: {
                    textAlign: 'left',
                },
                text1: {
                    fontSize: '19px',
                    color: '#000',
                    mb: '20px'
                },
                text2: {
                    fontSize: '16px',
                    color: 'grey'
                }
            }
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
        <Box w={['95%', '80%']} h={['300px', '600px']} m='35px auto' borderRadius='35px' boxShadow={'dark-lg'}>
            {play ?
                <Box borderRadius='35px' onClick={() => { setPlay(false) }} w='100%' h='100%' p='35px' textAlign='center' backgroundImage={'https://assets.www.happyfox.com/v2/images/version_2_cover_new.jpg'} backgroundRepeat='no-repeat' backgroundSize='100%'>
                    <Flex p='7px 14px' borderRadius={'15px'} w='fit-content' className="hov_blk_trans_back" align='center' m='auto'><Icon boxSize={'30px'} as={AiFillPlayCircle} mr='15px' /><Text fontSize='20px' fontWeight='700'> Watch The Video</Text></Flex>
                </Box> :
                <iframe borderRadius='35px' width="100%" height="100%" src="https://www.youtube.com/embed/cD0FfdHdNis?autoplay=0&controls=0"></iframe>}
        </Box>


        {/* sec3 */}
        <Box p='100px 0 0' bg='#fff'>
            <Flex direction='column' align={'center'} w={{ base: '90%', sm: '90%', md: '70%', lg: '60%' }} m='auto' textAlign={'center'}>
                <Box mb='25px'><Image src='https://assets.www.happyfox.com/v2/images/pcmag-new-2021.svg?r=1664427113311' /></Box>
                <Box mb='25px'><Heading>Best Help Desk Software for 6 years in a row.</Heading></Box>
                <Box w={{ base: '90%', sm: '90%', md: '70%', lg: '60%' }} mb='25px'><Text color='grey'>All-in-one <span display='inline' cursor='pointer' fontWeight={'700'} color='black'>help desk ticketing system</span> that provides faster and better support for your customers..</Text></Box>
                <Box mb='25px' border='2px solid black' fontWeight={'700'} borderRadius={'10px'} padding='7px 14px' cursor='pointer' w='fit-content'>Take Tour</Box>
            </Flex>
        </Box>




        {/* sec4 */}
        <Box p='100px 0'>
            <Box textAlign={'center'}>
                <Text>Trusted by Industry-Leading Companies</Text>
                <Flex align='center' justify={'space-around'} w={{ base: '90%', sm: '90%', md: '70%', lg: '60%' }} m='auto'>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/owler-logo.png' /></Box>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/whirlpool.svg' /></Box>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/jabra.svg' /></Box>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/leap-frog.svg' /></Box>
                    <Box w='120px'><Image w='100%' src='https://assets.www.happyfox.com/v2/logo/harbour.svg' /></Box>

                </Flex>
            </Box>
        </Box>
        {/* Section 5 */}
        <Box>
            <SlidingSection />
        </Box>
        {/* Section 6 */}
        <Box className="grad" w='100%' color='#fff' textAlign={'center'} padding='45px' overflow={'hidden'}>
            <Box bg='#fff' w='130%' h='200px' display={{ base: 'none', lg: 'block' }} ml='-15%' mt='-100px' mb='50px' transform='rotate(-5deg)' transformOrigin='0 0'>

            </Box>


            <Heading fontWeight={'0'} fontSize='40px' mb='25px'>Align your goals.</Heading>
            <Heading fontWeight={'700'} fontSize='40px' mb='25px'>Improve your ROI</Heading>



            <Grid gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']} gap='55px 0px' mt='75px'>

                {data_Ai.map((item) => <GridItem overflow={'scroll'} minH='fit-content' {...styles.sec6.GridItem} className='hoverBlackBg' key={item.id}>
                    <Flex {...styles.sec6.flex.style}>
                        <Image {...styles.sec6.flex.image} src={item.image} />
                        <Box {...styles.sec6.flex.box.style}>
                            <Text {...styles.sec6.flex.box.text1}>{item.text1}</Text>
                            <Text {...styles.sec6.flex.box.text2} > {item.text2}</Text>
                        </Box>
                    </Flex>
                </GridItem>)}

            </Grid>

            <Box m={['25px auto 0', '50px auto 0']} w={['500px']}>
                <NavLink to='/signup'><Box className='demoButton'>Get a Demo</Box></NavLink>
            </Box>

        </Box>
        {/* Section7 */}
        <Box w='100%' color='#000' textAlign={'center'} padding='45px' overflow={'hidden'}>

            <Heading fontWeight={'0'} fontSize='40px' mb='25px'>Help Desk Software for today's</Heading>
            <Heading fontWeight={'700'} fontSize='40px' mb='25px'>fast-changing global businesses</Heading>



            <Grid gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']} gap='55px 0px' mt='75px'>

                {data_bs.map((item) => <GridItem  {...styles.sec7.GridItem} borderColor={item.bd} className='hovergreyBg' key={item.id}>
                    <Flex {...styles.sec7.flex.style}>
                        <Image {...styles.sec7.flex.image} src={item.image} />
                        <Box {...styles.sec7.flex.box.style}>
                            <Text {...styles.sec7.flex.box.text1}>{item.text1}</Text>
                            <Text {...styles.sec7.flex.box.text2} > {item.text2}</Text>
                        </Box>
                    </Flex>
                </GridItem>)}

            </Grid>

            <Box m='10em auto 0' w={['500px']}>
                <NavLink to='/signup'><Box className='demoButton'>Get a Demo</Box></NavLink>
            </Box>

        </Box>

    </Box >
}