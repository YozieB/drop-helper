import {
    Badge,
    Button, Checkbox,
    Input,
    Text,
    Textarea,
    useToast
} from "@chakra-ui/react";
import { IRegex } from "../utils/interfaces.tsx";
import {Header} from "../components/shared/header.tsx";
import React, {useState} from "react";
import { generateRedirect, generateRedirectEveryPage } from "../utils/functions.ts";
import {RedirectFormContainer} from "../components/redirect/RedirectFormContainer.tsx";

export const Redirect = ({ title }: Pick<IRegex, "title">): React.FC => {
    return (
        <>
            <Header title={title} />
            <RedirectFormContainer />
            <Text textAlign="justify" mt="5" mb="5">
                Утилита подходит для создания <Badge colorScheme='purple'>редиректов</Badge> с одного сайта на другой,
                и последующей записи в <Badge colorScheme='blue'>.htaccess</Badge>
            </Text>
            <Text width="100%" textAlign="justify" mb="5">
                Для корректной работы ссылка на конечный сайт должна быть <Badge colorScheme='green'>полной</Badge>, т.е. начинаться с <Badge>'https://'</Badge> или <Badge>'www'</Badge>
            </Text>
            <Text width="100%" textAlign="justify" mb="5">
                Редирект с перенаправлением всех ссылок на конечный сайт вставлять в конец <Badge colorScheme='blue'>.htaccess</Badge>
            </Text>
        </>
    );
}

export default Redirect;