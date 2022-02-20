import '../styles/globals.css';
import {
    ChakraProvider,
    ColorModeProvider,
    useColorMode,
} from '@chakra-ui/react';
import { mtTheme } from '../styles/theme';
import {AppProps} from 'next/app';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


function mtWeb({ Component, pageProps }) {
    return (
        <ChakraProvider resetCSS theme={mtTheme}>
            {/* Persistant Color mode using colorModeProvider and to check the color mode value we use useColorMode */}
            <ColorModeProvider
                options={{
                    initialColorMode: 'light',
                    useSystemColorMode: true,
                }}
            >
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider>
    );
}

export default mtWeb;
