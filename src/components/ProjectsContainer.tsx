import { Box, Flex, Text } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import { ArrowDownRight } from "@phosphor-icons/react";

export function Projects() {
    return (
        <Box maxW='1120px' m='64px auto'>
            <Flex
                gap='4px'
                alignItems='center'
                mb='32px'
            >
                <Text
                    fontSize='24px'
                    color='#fff'
                >
                    PROJETOS
                </Text>
                <ArrowDownRight color='#fff' size={32} />
            </Flex>
            <ProjectCard />
        </Box>
    )
}