import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
// import GoogleFonts from 'next-google-fonts/';
import { ColorModeScript } from '@chakra-ui/react';
import { mtTheme1 } from '../styles/theme';

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Oldenburg&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" /> */}
        <Head />
        <body>
          <ColorModeScript
            initialColorMode={mtTheme1.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
