import {
    useColorMode,
    Button,
    IconButton,
    Flex,
    Box,
    Center,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    const iconColor = {
        light: 'black',
        dark: 'white',
    };

    return (
      <>
        <IconButton
          aria-label="Color mode Switcher"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
          variant="link"
          color={iconColor[colorMode]}
          size="md"
          _hover={{color: "whatsapp-500"}}
          height="2rem"
          width="2rem"
          isRound="true"
        >
          Switch Color Mode
        </IconButton>
      </>
    );
};

export default ColorSwitch;
