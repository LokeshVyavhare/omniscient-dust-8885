import { Box } from "@chakra-ui/react"
import { HomeMainTop } from "../Components/HomePageMain_Components/HomeMainTop"
import { Footer } from "../Components/HomePageMain_Components/Footer"

export const Home = () => {
    return <Box w={['140%', '100%', '100%']}>
        <Box>
            {/* main home page */}
            <HomeMainTop />
        </Box>
        <Box>
            <Footer />
        </Box>
    </Box>
}