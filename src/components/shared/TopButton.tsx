import React from "react";
import {Button, Flex, UseDisclosureReturn} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

interface ITopButton {
    onOpen: Pick<UseDisclosureReturn, "onOpen">
}


const _TopButton = ({onOpen}): React.FC<ITopButton> => {
    return (
        <Flex justifyContent="end" p="25 0 25 25">
            <Button onClick={onOpen} w="50" h="50">
                <HamburgerIcon boxSize={6}/>
            </Button>
        </Flex>
    )
}

export const TopButton: React.FC<ITopButton> = React.memo(_TopButton)