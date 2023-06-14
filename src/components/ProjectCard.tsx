import { Box, Flex, Link, StepStatus, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Divider } from "./Divider";

export function ProjectCard() {
    return (
        <Box
            display='flex'
            w='352px'
            h='382px'
            position='relative'
            alignItems='center'
            justifyContent='center'
            // bg='--gray900'
            border='--border-gray'
            borderRadius='10px'
            overflow='hidden'
            cursor='pointer'
            bg='#282828'
        >
            <Flex
                height='90px'
                display='flex'
                direction='column'
                position='absolute'
                bottom='0'
                left='0'
                right='0'
                padding='2rem'
                bg= '#161616'
                overflow='hidden'
                transition='0.7s'
                p='20px'

                _hover={{
                    height: '150px'
                }}
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
                        color="#83868A"
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
                        color='#83868A'
                        transition='0.2s'
                        _hover={{
                            textDecor: 'none',
                            color: '#FFF',
                            border: '1px solid #282828',
                            background: '#1C1C1C'
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
                        color='#83868A'
                        transition='0.2s'
                        _hover={{
                            textDecor: 'none',
                            color: '#FFF',
                            border: '1px solid #282828',
                            background: '#1C1C1C'
                        }}
                    >
                        Online ⚡
                    </Link>
                </Flex>
            </Flex>
        </Box>
    
    )
}