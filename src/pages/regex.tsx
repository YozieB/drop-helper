import {Badge, Button, Heading, List, ListItem, Text, Textarea, Tooltip, useToast} from "@chakra-ui/react";
import { generateRegex } from "../utils/functions.ts";
import React, {useState} from "react";
import { IRegex } from "../utils/interfaces.tsx";

export const Regex = ({ title }: IRegex) => {
    const [value, setValue] = useState('')
    const [isRunning, setIsRunning] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }
    const toast = useToast()

    return (
        <>
            <Heading display="flex" alignItems="end" mb="10" as="h1"><Badge fontSize='xxxl' colorScheme='default'>{title}</Badge> <Badge fontSize='sm' colorScheme='green'>Helper</Badge></Heading>
            <Textarea
                size="lg"
                resize="none"
                mb="4"
                h="28"
                value={value}
                onChange={handleInputChange}
                isDisabled={isRunning}
                placeholder='Вставь данные из файла badfiles.txt'
            >
            </Textarea>
            <Button
                onClick={() => {
                    // Имитируем запрос :))
                    setIsRunning(true)
                    setTimeout(() => {
                        setIsRunning(false)
                        generateRegex(value)
                        toast({
                            title: 'Regex готов.',
                            description: "Regex скопирован в буфер обмена",
                            status: 'success',
                            duration: 20000,
                            isClosable: true,
                        })
                        setValue('')
                    }, Math.floor(Math.random() * (5000 - 100 + 1) + 100))
                }}
                size="lg"
                isDisabled={value.length === 0}
                isLoading={isRunning}
                w="100%"
            >
                Сгенерировать regex
            </Button>
            <Text textAlign="justify" mt="5" mb="5">
                Утилита подходит для парсинга <Badge colorScheme='purple'>badfiles.txt</Badge> с восстановленного дропа через севрис <Badge colorScheme='green'><a
                href="https://r-tools.org">r-tools.org</a></Badge>,
                для последующей массовой замены с помощью <Badge colorScheme='red'>regex</Badge> в <Badge colorScheme='blue'>WebStorm</Badge> и других редакторах.
            </Text>
            <Heading  mt="10" mb="5" size="lg" width="100%" textAlign="left" as="h2">Готовые Regex</Heading>
            <List spacing="2" w="100%">
                <ListItem>
                    <Tooltip placement="auto" label="Кликни, чтобы скопировать" aria-label='A tooltip'>
                        <Button
                            colorScheme="gray"
                            onClick={() =>
                            {
                                toast({
                                    description: "Скопировано",
                                    status: 'info',
                                    duration: 3000,
                                    position: 'bottom-right',
                                    isClosable: false,
                                })
                                navigator.clipboard.writeText('(?<=<!-- Yandex\\.Metrika informer -->)([\\s\\S]*?)(?=<!-- \\/Yandex\\.Metrika informer -->)\n').then(() => console.log('DONE'))
                            }}
                        >
                            Yandex.Metrica informer
                        </Button>
                    </Tooltip>
                </ListItem>
                <ListItem>
                    <Tooltip placement="auto" label="Кликни, чтобы скопировать" aria-label='A tooltip'>
                        <Button
                            colorScheme="gray"
                            onClick={() =>
                            {
                                toast({
                                    description: "Скопировано",
                                    status: 'info',
                                    duration: 3000,
                                    position: 'bottom-right',
                                    isClosable: false,
                                })
                                navigator.clipboard.writeText('(?<=<!-- Yandex\\.Metrika counter -->)([\\s\\S]*?)(?=<!-- \\/Yandex\\.Metrika counter -->)\n').then(() => console.log('DONE'))
                            }}>
                            Yandex.Metrica counter
                        </Button>
                    </Tooltip>
                </ListItem>
                <ListItem>
                    <Tooltip placement="auto" label="Кликни, чтобы скопировать" aria-label='A tooltip'>
                        <Button
                            colorScheme="gray"
                            onClick={() =>
                            {
                                toast({
                                    description: "Скопировано",
                                    status: 'info',
                                    duration: 3000,
                                    position: 'bottom-right',
                                    isClosable: false,
                                })
                                navigator.clipboard.writeText('(?<=<!-- Google Tag Manager -->)([\\s\\S]*?)(?=<!-- End Google Tag Manager -->)\n').then(() => console.log('DONE'))
                            }}>
                            Google Tag Manager
                        </Button>
                    </Tooltip>
                </ListItem>
                <ListItem>
                    <Tooltip placement="auto" label="Кликни, чтобы скопировать" aria-label='A tooltip'>
                        <Button
                            colorScheme="gray"
                            onClick={() =>
                            {
                                toast({
                                    description: "Скопировано",
                                    status: 'info',
                                    duration: 3000,
                                    position: 'bottom-right',
                                    isClosable: false,
                                })
                                navigator.clipboard.writeText('(?<=<!-- Google Tag Manager (noscript) -->)([\\s\\S]*?)(?=<!-- End Google Tag Manager (noscript) -->)\n').then(() => console.log('DONE'))
                            }}>
                            Google Tag Manager (noscript)
                        </Button>
                    </Tooltip>
                </ListItem>
            </List>
        </>
    );
}