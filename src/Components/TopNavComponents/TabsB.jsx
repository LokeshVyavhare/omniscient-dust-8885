import { Box } from '@chakra-ui/react'
import { useState, useRef, useEffect } from 'react'
import '../../CSS/Components_Tabs.css';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'


function RemovePopUp(ref, action) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                action();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {

            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export const TabsB = ({ text, children, name, active, setActive }) => {
    const popUpDiv = useRef(null);
    RemovePopUp(popUpDiv, () => { setActive(null); console.log(text) })



    return <Box>
        <Box className='popUpTabTriggerB' fontSize={['12px', '12px', '12px', '16px']} style={active === name ? { backgroundColor: 'rgb(235,235,235)', color: 'black', fontWeight: '700', borderRadius: '15px' } : {}} onClick={() => { setActive(name) }}>
            {text} {active === name ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Box>
        {active === name ? <Box p='10px' position={'fixed'} >
            <Box ref={popUpDiv} className='popUpTabDisaplay'>
                {children}
            </Box>
        </Box> : null}
    </Box>
}
