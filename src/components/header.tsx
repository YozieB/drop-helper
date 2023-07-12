import { Badge, Heading } from "@chakra-ui/react";
import { IHeader } from "../utils/interfaces.tsx";

export const Header = ({ title }: IHeader) => {
    return (
        <Heading display="flex" alignItems="end" mb="10" as="h1"><Badge fontSize='xxxl' colorScheme='default'>{title}</Badge> <Badge fontSize='sm' colorScheme='green'>Helper</Badge></Heading>
    );
}
