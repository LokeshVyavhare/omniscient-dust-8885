import { Box, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";

const mainGrid = {
    templateColumns: ['1fr 2fr 1fr'],
    gap: '35px'
}
const header_title = {
    textTransform: 'uppercase',
    color: 'black',
    fontSize: '16px',
    mb: '25px'
}



export const TabPopUp = (prop) => {
    const { type, data } = prop;
    if (type === 'A') {
        return <Box className="popUpbox">
            <SimpleGrid {...mainGrid}>
                <Box p={'35px'} bg='#eeebef'>
                    <Text {...header_title}>{data.header.title}</Text>
                    <Text color='grey' >{data.header.subTitle}</Text>
                </Box>
                <SimpleGrid templateColumns={['1fr 1fr']} gap='15px'>
                    {data.main.map((item) => <Box key={item.id} p='20px'>
                        <Text textTransform={'uppercase'} fontSize='12px'>{item.subhead}</Text>
                        <Flex align={'center'}>
                            <Image width={'40px'} mb='15px' mt='15px' mr='20px' src={item.image} alt={item.head} />
                            <Text color='black' fontWeight={'700'}>{item.head}</Text>
                        </Flex>
                        <Text fontSize={'12px'}>{item.desc}</Text>
                    </Box>)}
                </SimpleGrid>
                <Box p={'35px'} bg='#eeebef'>
                    <Text textTransform={'uppercase'} color='rgb(170,170,170)' mb='15px' fontSize='12px'>{data.aside.title}</Text>
                    <Image w='70%' mb='20px' src={data.aside.image} />
                    {data.aside.desc1 !== 'null' && <Text color={'grey  '} mb='10px'><q>{data.aside.desc1}</q></Text>}
                    <Text color='black' fontSize={'13px'}>{data.aside.desc2}</Text>
                </Box>

            </SimpleGrid>
        </Box>
    }
}