import { extendTheme } from '@chakra-ui/react';

const themeOptions = {
  colors: {
    gray: {
      "900": "#1D1D1D",
      "400": "#DADADA",
      "700": "#47585B"
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
}

export const theme = extendTheme({ themeOptions });
