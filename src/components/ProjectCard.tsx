import { Box, Flex, Image, Link, StepStatus, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Divider } from "./Divider";

export function ProjectCard() {

    const [height, setHeight] = useState('90px');

    const handleHeightMouseEnter = () => {
        setHeight('150px')
    }

    const handleHeightMouseLeave = () => {
        setHeight('90px')
    }
    
    return (
        <Box
            display='flex'
            w='352px'
            h='320px'
            position='relative'
            alignItems='center'
            justifyContent='center'
            border='--border-gray'
            borderRadius='10px'
            overflow='hidden'
            cursor='pointer'
            onMouseEnter={handleHeightMouseEnter}
            onMouseLeave={handleHeightMouseLeave}
            bg='--gray400'
        >
            <Flex>
                    <Image
                        height='100%' 
                        src='https://framerusercontent.com/images/dp309a0U6x1c5QhqV5RpaE3Ug.webp'
                        filter={ height=== '150px' ? 'blur("5px")' : ""}
                    />
                </Flex>
            <Flex
                height={height}
                display='flex'
                direction='column'
                position='absolute'
                bottom='0'
                left='0'
                right='0'
                padding='2rem'
                bg= '--gray900'
                overflow='hidden'
                transition='0.7s'
                p='20px'
            >
                <Flex
                    flexDirection='column'
                >
                    <Text
                        color='#fff'
                        fontWeight='600'
                        mb='4px'
                    >
                        Name workplace
                    </Text>
                    <Flex
                        align='center'
                        gap='8px'
                        color='--gray300'
                    >
                        <Text fontSize='14px'>Personal</Text>
                        <Divider width="4px" height="4px"/>
                        <Text fontSize='14px'>Front-End</Text>
                    </Flex>
                </Flex>
                <Flex
                    justify='space-between'
                    gap='16px'
                    mt='16px'
                >
                    <Link
                        textAlign='center'
                        textDecor='none'
                        width='100%'
                        padding='4px 16px'
                        border='1px solid transparent'
                        borderRadius='8px'
                        mt='8px'
                        color='--gray300'
                        transition='0.2s'
                        _hover={{
                            textDecor: 'none',
                            color: '#FFF',
                            border: '--border-gray',
                            background: '--gray700'
                        }}
                    >
                        Detalhes
                    </Link>
                    <Link
                        textAlign='center'
                        textDecor='none'
                        width='100%'
                        padding='4px 16px'
                        border='1px solid transparent'
                        borderRadius='8px'
                        mt='8px'
                        color='--gray300'
                        transition='0.2s'
                        _hover={{
                            textDecor: 'none',
                            color: '#FFF',
                            border: '--border-gray',
                            background: '--gray700'
                        }}
                    >
                        Online ⚡
                    </Link>
                </Flex>
            </Flex>
        </Box>
    
    )
}