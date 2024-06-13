import {Checkbox, Input, Textarea, useToast} from "@chakra-ui/react";
import React, {useState} from "react";
import {generateRedirect, generateRedirectEveryPage, generateRegex} from "../../utils/functions.ts";
import {RedirectButton} from "./RedirectButton.tsx";
import {RedirectCheckbox} from "./RedirectCheckbox.tsx";

export const RedirectFormContainer = () => {
    const [fromLink, setFromLink] = useState('')
    const [toLink, setToLink] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [isRunning, setIsRunning] = useState(false)
    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault();
        // Имитируем запрос :))
        setIsRunning(true)
        new Promise(resolve => {
            setTimeout(resolve, Math.floor(Math.random() * (2500 - 100 + 1) + 100))
        }).then(() => {
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
        })
    }

    const isButtonDisabled = (!fromLink || !toLink) && (!toLink || !isChecked)

    const toggleCheckbox = React.useCallback(() => setIsChecked(prev => !prev), [])

    return (
        <form onSubmit={handleSubmit}>
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
            <RedirectCheckbox toggleCheckbox={toggleCheckbox} isChecked={isChecked} isRunning={isRunning} />
            <RedirectButton isDisabled={isButtonDisabled} isRunning={isRunning} />
        </form>
    )
}