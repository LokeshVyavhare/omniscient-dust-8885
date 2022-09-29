import { Box, Text } from "@chakra-ui/react"
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import './TabQ.css'

export const TabsQ = (prop) => {
    const { text, children, active, name, setActive } = prop
    return <Box className='cont'>
        <Box className='popUpTabTrigger' style={active === name ? { borderBottom: '2px solid orange', color: 'black', fontWeight: '700' } : {}} onClick={() => { setActive(name) }}>
            {text}
        </Box>

        <Box className='popup'>{active === name ? children : null}</Box>
    </Box>
}