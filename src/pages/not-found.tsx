import {Badge, Box, Heading, Link} from "@chakra-ui/react";
import { Link as ReachLink} from "react-router-dom";
export const NotFound = () => {
    return (
        <Box textAlign="center">
            <Heading  mt="10" mb="5" size="lg" as="h1">Страница не найдена</Heading>
            <Badge fontSize='xxxl' colorScheme='green'>
                <Link textAlign="center" as={ReachLink} to="/">На главную</Link>
            </Badge>
        </Box>
    );
}