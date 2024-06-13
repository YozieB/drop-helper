import {Textarea, useToast} from "@chakra-ui/react";
import React, {useCallback, useState} from "react";
import {RegexButton} from "./RegexButton.tsx";
import {generateRegex} from "../../utils/functions.ts";


export const RegexFormContainer = ({children}): React.FC => {
    const [value, setValue] = useState('')
    const [isRunning, setIsRunning] = useState(false)

    const toast = useToast()

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        // Имитируем запрос :))
        setIsRunning(true)
        new Promise(resolve => {
            setTimeout(resolve, Math.floor(Math.random() * (2500 - 100 + 1) + 100))
        }).then(() => {
            generateRegex(value)
            toast({
                title: 'Regex готов.',
                description: "Regex скопирован в буфер обмена",
                status: 'success',
                duration: 20000,
                isClosable: true,
            })
            setValue('')
            setIsRunning(false)
        })
    }
    const isButtonDisabled = value.length === 0
    return (
    <form onSubmit={handleSubmit}>
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
        <RegexButton isDisabled={isButtonDisabled} isRegexRunning={isRunning} />
    </form>
    )
}