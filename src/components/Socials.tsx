import { Flex, Link } from "@chakra-ui/react";
import { FaDiscord, FaLinkedinIn, FaGithub } from 'react-icons/fa'

export function Socials() {
    return (
        <Flex
                gap='16px'
            >
                <Link
                    href='#'
                    padding=' 8px'
                    borderRadius='50px'
                    border='--border-transparent'
                    color='--gray300'
                    transition='0.2s'
                    _hover={{
                        background: '--gray800',
                        border: '--border-gray',
                        color: '--white800'
                    }}
                >
                    <FaLinkedinIn />
                </Link>
                
                <Link
                    href='#'
                    padding=' 8px'
                    borderRadius='50px'
                    border='--border-transparent'
                    color='--gray300'
                    transition='0.2s'
                    _hover={{
                        background: '--gray800',
                        border: '--border-gray',
                        color: '--white800'
                    }}
                >
                    <FaGithub />
                </Link>

                <Link
                    href='#'
                    padding=' 8px'
                    borderRadius='50px'
                    border='--border-transparent'
                    color='--gray300'
                    transition='0.2s'
                    _hover={{
                        background: '--gray800',
                        border: '--border-gray',
                        color: '--white800'
                    }}
                >
                    <FaDiscord />
                </Link>
                
            </Flex>
    )
}