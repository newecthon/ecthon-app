import { Flex, Link } from "@chakra-ui/react";
import { FaDiscord, FaLinkedinIn, FaGithub } from 'react-icons/fa'


const socials = [
    {icon: <FaDiscord/>, path: ""},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaGithub/>, path: ""},

]

export function Socials() {
    return (
        <Flex
                gap='16px'
            >
                {socials.map((social, index) => (
                    <Link
                        key={index}
                        href={social.path}
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
                        {social.icon}
                    </Link>
                ))}
            </Flex>
    )
}