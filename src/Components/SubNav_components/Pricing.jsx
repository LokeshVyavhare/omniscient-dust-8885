import {
    Box,
    SimpleGrid,
    Text,
    Flex,
    Image,
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

const data = {
    overview: [
        {
            id: 'feature_ov_1',
            image: 'https://img.icons8.com/color/2x/rocket.png',
            title: 'Help Desk Tour',
            subTitle: 'See HappyFox Helpdesk in action.'
        },
        {
            id: 'feature_ov_2',
            image: 'https://img.icons8.com/color-glass/2x/user.png',
            title: 'Get a Demo',
            subTitle: ' See HappyFox Helpdesk in action.'
        }
    ],
    features: [
        {
            id: 'feature_ft_1',
            image: 'https://img.icons8.com/emoji/2x/ticket-emoji.png',
            title: 'Ticketing System',
            subTitle: 'Deliver exceptional customer service with HappyFox.'
        },
        {
            id: 'feature_ft_2',
            image: 'https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/2x/external-Ticket-Machine-urban-life-smashingstocks-flat-smashing-stocks.png',
            title: 'Knowledge Base',
            subTitle: 'Promote self-service; build help and FAQ pages.'
        },
        {
            id: 'feature_ft_3',
            image: 'https://img.icons8.com/color/2x/topic.png',
            title: 'Canned Actions',
            subTitle: 'Respond faster using templated responses and actions.'
        },
        {
            id: 'feature_ft_4',
            image: 'https://img.icons8.com/parakeet/2x/experimental-restart-parakeet.png',
            title: 'Automation',
            subTitle: 'Reduce the time spent on repetitive tasks.'
        },
        {
            id: 'feature_ft_5',
            image: 'https://img.icons8.com/external-others-inmotus-design/2x/external-Done-accept-others-inmotus-design-2.png',
            title: 'Task Management',
            subTitle: 'Create and manage all the tasks involved in resolving a ticket.'
        },
        {
            id: 'feature_ft_6',
            image: 'https://img.icons8.com/color/2x/project.png',
            title: 'Asset Management',
            subTitle: 'Track hardware and software assets in one place.'
        },
        {
            id: 'feature_ft_7',
            image: 'https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/2x/external-survey-student-counselor-inipagistudio-lineal-color-inipagistudio.png',
            title: 'Satisfaction Survey',
            subTitle: 'Get Feedback and Improve Customer Experience.'
        },
        {
            id: 'feature_ft_8',
            image: 'https://img.icons8.com/color/2x/help.png',
            title: 'Help Desk Reports',
            subTitle: 'Monitor, Analyze and Improve your Customer Support.'
        }
    ]
}

const styles = {
    imageSm: {
        w: '35px',
        p: '5px',
        display: 'block',
        mr: '10px'
    },
    title1: {
        fontSize: '15px',
        color: '#000',
        textTransform: 'uppercase',
        mb: '15px'
    },
    title2: {
        fontSize: '14px',
        color: 'rgb(70,70,70)',
        textTransform: 'Capitalize',
        mb: '10px'
    },
    desc: {
        fontSize: '12px'
    }

}

export const Pricing = () => {
    return <Box className='popUpbox'>
        <SimpleGrid templateColumns={['1fr 3fr 1fr']} p='30px'>


            <Box p='15px'>
                {/* OverView */}

                <Text {...styles.title1}>OVERVIEW</Text>
                <Flex direction={'column'} gap={'30px'}>

                    {data.overview.map((item) => <Flex key={item.id}>

                        <Box><Image src={item.image} {...styles.imageSm} /></Box>

                        <Flex direction={'column'}>
                            <Text {...styles.title2}>{item.title}</Text>
                            <Text {...styles.desc}>{item.subTitle}</Text>
                        </Flex>

                    </Flex>)}
                </Flex>
            </Box>


            <SimpleGrid p='15px'>
                {/* OverView */}
                <Text {...styles.title1}>Features</Text>
                <SimpleGrid templateColumns={['1fr 1fr']} gap={'30px'}>
                    {data.features.map((item) => <Flex key={item.id}>
                        <Box><Image src={item.image} {...styles.imageSm} /></Box>
                        <Flex direction={'column'}>
                            <Text {...styles.title2}>{item.title}</Text>
                            <Text {...styles.desc}>{item.subTitle}</Text>
                        </Flex>
                    </Flex>)}
                    <Box w='200px' borderRadius={'20px'} bg='rgb(230,230,230)' p='10px 20px'>
                        See More Features <ChevronRightIcon />
                    </Box>
                </SimpleGrid>
            </SimpleGrid>


            <SimpleGrid p='15px'>
                <Text {...styles.title1}>integrations</Text>
                <Flex>
                    <Image {...styles.imageSm} src='https://assets.www.happyfox.com/v2/images/site-nav/hf-int-icon.svg' />
                    <Text {...styles.title2}>HappyFox Chat</Text>
                </Flex>
                <Flex>
                    <Image {...styles.imageSm} src='https://assets.www.happyfox.com/v2/images/site-nav/salesforce-int-icon.svg' />
                    <Text {...styles.title2}>Sales Force</Text>
                </Flex>
                <Flex>
                    <Image {...styles.imageSm} src='https://assets.www.happyfox.com/v2/images/site-nav/aircall-int-icon.svg' />
                    <Text {...styles.title2}>AirCall</Text>
                </Flex>
                <Flex>
                    <Image {...styles.imageSm} src='https://assets.www.happyfox.com/logo/ms-teams-logo.svg' />
                    <Text {...styles.title2}>Microsoft Teams</Text>
                </Flex>
                <Flex>
                    <Image {...styles.imageSm} src='https://assets.www.happyfox.com/v2/images/site-nav/slack-int-icon.svg' />
                    <Text {...styles.title2}>Slack</Text>
                </Flex>
                <Flex>
                    <Image {...styles.imageSm} src='https://assets.www.happyfox.com/v2/images/site-nav/shopify-int-icon.svg' />
                    <Text{...styles.title2}>Shopify</Text>
                </Flex>

            </SimpleGrid>
        </SimpleGrid>
    </Box>
}