import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = {
  ...chakraTheme.fonts,
  body: `Roboto, Lato, Montserrat, Oswald, "Open Sans", Oldenburg, Helvetica, -apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Montserrat, Lato, Roboto, Helvetica, Oswald, "Open Sans", Oldenburg, -apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol" `,
};

const breakpoints = createBreakpoints({
  sm: '40rem',
  md: '52rem',
  lg: '67.75rem',
  xl: '75rem',
});

const colors = {
  ...chakraTheme.colors,


   whiteMostla: "#fafafa",
   // whiteMost: #fafafa
  whiteMost: {
    100: '#fefefe',
    200: '#fdfdfd',
    300: '#fcfcfc',
    400: '#fbfbfb',
    500: '#fafafa',
    600: '#c8c8c8',
    700: '#969696',
    800: '#646464',
    900: '#323232',
  },
  // Off White: #e0e0e0
  offWhite: {
    100: '#f9f9f9',
    200: '#f3f3f3',
    300: '#ececec',
    400: '#e6e6e6',
    500: '#e0e0e0',
    600: '#b3b3b3',
    700: '#868686',
    800: '#5a5a5a',
    900: '#2d2d2d',
  },
  // Off Whiter : #d1d1d1
  offWhiter: {
    100: '#f6f6f6',
    200: '#ededed',
    300: '#e3e3e3',
    400: '#dadada',
    500: '#d1d1d1',
    600: '#a7a7a7',
    700: '#7d7d7d',
    800: '#545454',
    900: '#2a2a2a',
  },
  // Blacker: #111111
  blacker: {
    100: '#cfcfcf',
    200: '#a0a0a0',
    300: '#707070',
    400: '#414141',
    500: '#111111',
    600: '#0e0e0e',
    700: '#0a0a0a',
    800: '#070707',
    900: '#030303',
  },
  // off Black: #272727
  offBlack: {
    100: '#d4d4d4',
    200: '#a9a9a9',
    300: '#7d7d7d',
    400: '#525252',
    500: '#272727',
    600: '#1f1f1f',
    700: '#171717',
    800: '#101010',
    900: '#080808',
  },
  // Secondary Purple: #450d58
  srPurple: {
    100: '#dacfde',
    200: '#b59ebc',
    300: '#8f6e9b',
    400: '#6a3d79',
    500: '#450d58',
    600: '#370a46',
    700: '#290835',
    800: '#1c0523',
    900: '#0e0312',
  },
  // Secondary Deep Blue: #090d6c
  srDeBlue: {
    100: '#cecfe2',
    200: '#9d9ec4',
    300: '#6b6ea7',
    400: '#3a3d89',
    500: '#090d6c',
    600: '#070a56',
    700: '#050841',
    800: '#04052b',
    900: '#020316',
  },

  // Secondary Sky Blue: #007ee9
  srSkBlue: {
    100: '#cce5fb',
    200: '#99cbf6',
    300: '#66b2f2',
    400: '#3398ed',
    500: '#007ee9',
    600: '#0065ba',
    700: '#004c8c',
    800: '#00325d',
    900: '#00192f',
  },

  // Secondary Light Blue: #66b8eb
  srLiBlue: {
    100: '#e0f1fb',
    200: '#c2e3f7',
    300: '#a3d4f3',
    400: '#85c6ef',
    500: '#66b8eb',
    600: '#5293bc',
    700: '#3d6e8d',
    800: '#294a5e',
    900: '#14252f',
  },
  // Primary Green: #23922e
  prGreen: {
    100: '#d3e9d5',
    200: '#a7d3ab',
    300: '#7bbe82',
    400: '#4fa858',
    500: '#23922e',
    600: '#1c7525',
    700: '#15581c',
    800: '#0e3a12',
    900: '#071d09',
  },

  // Secondary Neon Green: #00f130
  srNeoGreen: {
    100: '#ccfcd6',
    200: '#99f9ac',
    300: '#66f783',
    400: '#33f459',
    500: '#00f130',
    600: '#00c126',
    700: '#00911d',
    800: '#006013',
    900: '#00300a',
  },
  // Secondary Ocre Yellow: #e1b827
  srOcrYellow: {
    100: '#f9f1d4',
    200: '#f3e3a9',
    300: '#edd47d',
    400: '#e7c652',
    500: '#e1b827',
    600: '#b4931f',
    700: '#876e17',
    800: '#5a4a10',
    900: '#2d2508',
  },
  // Secondary Enactus Yellow: #ecb543
  srEnaYellow: {
    100: '#fbf0d9',
    200: '#f7e1b4',
    300: '#f4d38e',
    400: '#f0c469',
    500: '#ecb543',
    600: '#bd9136',
    700: '#8e6d28',
    800: '#5e481b',
    900: '#2f240d',
  },
  // Secondary Orange: #d95f02
  srOrange: {
    100: '#f7dfcc',
    200: '#f0bf9a',
    300: '#e89f67',
    400: '#e17f35',
    500: '#d95f02',
    600: '#ae4c02',
    700: '#823901',
    800: '#572601',
    900: '#2b1300',
  },
  // Secondary Red: #9d002d
  srRed: {
    100: '#ebccd5',
    200: '#d899ab',
    300: '#c46681',
    400: '#b13357',
    500: '#9d002d',
    600: '#7e0024',
    700: '#5e001b',
    800: '#3f0012',
    900: '#1f0009',
  },
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: 'false',
  cssVarPrefix: 'mt',
};
const overrides = {
  ...chakraTheme,
  fonts,
  breakpoints, 
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.75rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  colors,
  config,
};

const mtTheme1 = extendTheme(overrides);

export default mtTheme1;
