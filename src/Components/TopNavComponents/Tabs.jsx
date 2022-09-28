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

export const Tabs = ({ text, children, name, active, setActive }) => {
    const popUpDiv = useRef(null);
    RemovePopUp(popUpDiv, () => { setActive(null); console.log(text) })



    return <Box>
        <Box className='popUpTabTrigger' style={active === name ? { borderBottom: '2px solid orange', color: 'black', fontWeight: '700' } : {}} onClick={() => { setActive(name) }}>
            {text} {active === name ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Box>
        {active === name ? <Box ref={popUpDiv} className='popUpTabDisaplay'>
            {children}
        </Box> : null}
    </Box>
}
