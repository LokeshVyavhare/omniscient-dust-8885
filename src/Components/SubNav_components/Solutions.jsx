import {
    Box,
    SimpleGrid,
    Text,
    Flex,
    Image,
} from '@chakra-ui/react'

import { ChevronRightIcon } from '@chakra-ui/icons'

const data = {
    features: [
        {
            id: 'solutions_ind_1',
            image: 'https://img.icons8.com/external-others-anggara-putra/2x/external-Education-charity-others-anggara-putra.png',
            title: 'Education',
            subTitle: 'Streamline your IT and Operations Support'
        },
        {
            id: 'solutions_ind_2',
            image: 'https://img.icons8.com/external-filled-outline-wichaiwi/2x/external-it-digital-economy-filled-outline-wichaiwi.png',
            title: 'IT Services',
            subTitle: 'Provide the best IT support'
        },
        {
            id: 'solutions_ind_3',
            image: 'https://img.icons8.com/fluency/2x/potted-plant.png',
            title: 'Non-Profit Organisations',
            subTitle: 'Affordable help desk for efficient operations '
        },
        {
            id: 'solutions_ind_4',
            image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-plane-farm-flaticons-lineal-color-flat-icons-2.png',
            title: 'Airlines',
            subTitle: 'Elevate your customer service experience'
        },
        {
            id: 'solutions_ind_5',
            image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-retail-smart-technology-flaticons-lineal-color-flat-icons-2.png',
            title: 'Retail',
            subTitle: 'Delight your customers with speedy support.'
        },
        {
            id: 'solutions_ind_6',
            image: 'https://img.icons8.com/emoji/344/antenna-bars-emoji.png',
            title: 'Telecom',
            subTitle: 'Meet your SLAs and Improve Retention'
        },
        {
            id: 'solutions_ind_7',
            image: 'https://img.icons8.com/office/2x/heart-health.png',
            title: 'Healthcare',
            subTitle: 'Your all-in-one support stack '
        },
        {
            id: 'solutions_ind_8',
            image: 'https://img.icons8.com/office/2x/real-estate.png',
            title: 'Real Estate',
            subTitle: ' Serve your agents and buyers better'
        },
        {
            id: 'solutions_ind_9',
            image: 'https://img.icons8.com/external-filled-outline-wichaiwi/2x/external-tourism-reopening-country-filled-outline-wichaiwi.png',
            title: 'Travel',
            subTitle: ' Deliver Multi-Channel Customer Service'
        },
        {
            id: 'solutions_ind_10',
            image: 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-government-quarantine-flaticons-lineal-color-flat-icons-3.png',
            title: 'Government',
            subTitle: 'Robust support solution for public sector'
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

export const Solutions = () => {
    return <Box className='popUpbox'>
        <SimpleGrid templateColumns={['3fr 1fr']} p='30px'>
            <SimpleGrid p='15px'>
                {/* OverView */}
                <Text {...styles.title1}>Industries</Text>
                <SimpleGrid templateColumns={['1fr 1fr 1fr']} gap={'30px'}>
                    {data.features.map((item) => <Flex key={item.id}>
                        <Box><Image src={item.image} {...styles.imageSm} /></Box>
                        <Flex direction={'column'}>
                            <Text {...styles.title2}>{item.title}</Text>
                            <Text {...styles.desc}>{item.subTitle}</Text>
                        </Flex>
                    </Flex>)}
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