import React from "react";
import {Button, Flex} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

const _TopButton = ({onOpen}) => {
    return (
        <Flex justifyContent="end" p="25 0 25 25">
            <Button onClick={onOpen} w="50" h="50">
                <HamburgerIcon boxSize={6} />
            </Button>
        </Flex>
    )
}

export const TopButton = React.memo(_TopButton)