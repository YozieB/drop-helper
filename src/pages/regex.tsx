import {Badge, Heading, Text} from "@chakra-ui/react";
import React from "react";
import { IRegex } from "../utils/interfaces.tsx";
import {RegexFormContainer} from "../components/regex/RegexFormContainer.tsx";
import {RegexList} from "../components/regex/RegexList.tsx";

const _Regex = ({ title }: IRegex): React.FC => {
    return (
        <>
            <Heading display="flex" alignItems="end" mb="10" as="h1"><Badge fontSize='xxxl' colorScheme='default'>{title}</Badge> <Badge fontSize='sm' colorScheme='green'>Helper</Badge></Heading>
            <RegexFormContainer />
            <Text textAlign="justify" mt="5" mb="5">
                Утилита подходит для парсинга <Badge colorScheme='purple'>badfiles.txt</Badge> с восстановленного дропа через севрис <Badge colorScheme='green'><a
                href="https://r-tools.org">r-tools.org</a></Badge>,
                для последующей массовой замены с помощью <Badge colorScheme='red'>regex</Badge> в <Badge colorScheme='blue'>WebStorm</Badge> и других редакторах.
            </Text>
            <Heading  mt="10" mb="5" size="lg" width="100%" textAlign="left" as="h2">Готовые Regex</Heading>
            <RegexList />
        </>
    );
}

export const Regex: typeof _Regex = React.memo(_Regex)