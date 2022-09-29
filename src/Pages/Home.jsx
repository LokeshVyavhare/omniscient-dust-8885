import { Box } from "@chakra-ui/react"
import { HomeMainTop } from "../Components/HomePageMain_Components/HomeMainTop"
import { NavbarMain } from "../Components/NavbarMain"

export const Home = () => {
    return <Box>
        <Box>
            <NavbarMain />
        </Box>
        <Box>
            {/* main home page */}
            <HomeMainTop />
        </Box>
    </Box>
}