import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    // global styles
    styles: {
        global: {
            body: {
                bg: '--gray900',
            }
        }
    },
    // colors
    colors: {
        '--gray900': '#161616',
        '--gray800': '#1A1A1A',
        '--gray700': '#1C1C1C',
        '--gray400': '#282828',
        '--gray300': '#83868A',
        '--white800': '#F2F2F2',
    },
    // border
    borders: {
        '--border-gray': '1px solid #282828',
        '--border-transparent': '1px solid transparent'
    },
    // external fonts
    fonts: {
        heading: ``,
        body: `'Bai Jamjuree', sans-serif`,
    },
})

export default theme