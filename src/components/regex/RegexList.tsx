import {Button, List, ListItem, Tooltip, useToast} from "@chakra-ui/react";
import React from "react";
import {regexList} from "../../utils/constants.ts";

interface IRegexListItem {
    title: string
    copyText: string
}

const RegexListItem = ({title, copyText}): React.FC<IRegexListItem> => {
    const toast = useToast();
    return (
        <ListItem>
            <Tooltip placement="auto" label="Кликни, чтобы скопировать" aria-label='A tooltip'>
            <Button
                colorScheme="gray"
                onClick={() =>
                    navigator.clipboard.writeText(copyText).then(() => {
                        toast({
                            description: "Скопировано",
                            status: 'info',
                            duration: 3000,
                            position: 'bottom-right',
                            isClosable: false,
                        })
                    })
                }
            >{title}</Button>
            </Tooltip>
        </ListItem>
    )
}

export const RegexList = () => {
    return (
        <List spacing="2" w="100%">
            {regexList.map(({title, copyText}) => <RegexListItem key={title} title={title} copyText={copyText} />)}
        </List>
    )
}
