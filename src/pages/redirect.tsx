import {
    Badge,
    Button, Checkbox,
    Input,
    Text,
    Textarea,
    useToast
} from "@chakra-ui/react";
import { IRegex } from "../utils/interfaces.tsx";
import {Header} from "../components/header.tsx";
import React, {useState} from "react";
import { generateRedirect, generateRedirectEveryPage } from "../utils/functions.ts";

export const Redirect = ({ title }: IRegex) => {
    const [fromLink, setFromLink] = useState('')
    const [toLink, setToLink] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [isRunning, setIsRunning] = useState(false)
    const toast = useToast()

    return (
        <>
            <Header title={title} />
            <Textarea
                size="lg"
                resize="none"
                mb="4"
                h="28"
                value={fromLink}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFromLink(e.target.value)}
                isDisabled={isRunning || isChecked}
                placeholder='Откуда сделать редирект'
            >
            </Textarea>
            <Input
                size="lg"
                h="14"
                value={toLink}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setToLink(e.target.value)}
                isDisabled={isRunning}
                mb="4"
                placeholder='Куда сделать редирект' />
            <Checkbox
                size="lg"
                width="100%"
                isChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                mb="4"
                isDisabled={isRunning}
            >
                Перенаправить все ссылки на конечный сайт
            </Checkbox>
            <Button
                onClick={() => {
                    // Имитируем запрос :))
                    setIsRunning(true)
                    setTimeout(() => {
                        setIsRunning(false)
                        if (isChecked) {
                            generateRedirectEveryPage(toLink)
                        } else {
                            generateRedirect(fromLink, toLink)
                        }
                        toast({
                            title: 'Редиректы готовы.',
                            description: "Редиректы скопированы в буфер обмена",
                            status: 'success',
                            duration: 20000,
                            isClosable: true,
                        })
                        setFromLink('')
                        setToLink('')
                        setIsChecked(false)
                    }, Math.floor(Math.random() * (4000 - 100 + 1) + 100))
                }}
                size="lg"
                isDisabled={(!fromLink || !toLink) && (!toLink || !isChecked)}
                isLoading={isRunning}
                w="100%"
            >
                Сгенерировать редиректы
            </Button>
            <Text textAlign="justify" mt="5" mb="5">
                Утилита подходит для создания <Badge colorScheme='purple'>редиректов</Badge> с одного сайта на другой,
                и последующей записи в <Badge colorScheme='blue'>.htaccess</Badge>
            </Text>
            <Text width="100%" textAlign="justify" mb="5">
                Для корректной работы ссылка на конечный сайт должна быть <Badge colorScheme='green'>полной</Badge>, т.е. начинаться с <Badge>'https://'</Badge> или <Badge>'www'</Badge>
            </Text>
        </>
    );
}

export default Redirect;