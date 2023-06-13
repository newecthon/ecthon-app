import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";

export function Header() {
    const pages = [
        "Home",
        "About",
        "Contato"
    ]
    const [selectedTab, setSelectedTab] = useState(pages[0])

    return (
        <Flex
            w='100%'
            h='80px'
            align='center'
            justify='center'
            background='--gray700'
        >
            <Flex as='header'
                minW='1120px'
                justifyContent='space-between'
                align='center'
            >
                <Link href='/' color='#FFF' fontSize='40px'>e.</Link>

                <Flex as='nav'
                    gap='16px'
                >
                    {pages.map(item => (
                        <Link
                            key={item}
                            href={ item === 'Home' ? '/' : item.toLowerCase() }
                            padding=' 8px 16px'
                            borderRadius='10px'
                            border='--border-transparent'
                            color='--gray300'
                            transition='0.2s'
                            _hover={{
                                textDecor: 'none',
                                background: '--gray800',
                                border: '--border-gray',
                                color: '--white800'
                            }}
                        >
                        {item}
                    </Link>
                    ))}
                    
                </Flex>
            </Flex>
        </Flex>
    )
}