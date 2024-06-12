import {
    useDisclosure,
    Flex
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/shared/sidebar.tsx";
import {Copyright} from "../components/shared/Copyright.tsx";
import {TopButton} from "../components/shared/TopButton.tsx";
import {RoutesContainer} from "../components/RoutesContainer.tsx";

function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
            <Flex p="5" direction="column" minHeight='100svh'>
                <TopButton onOpen={onOpen} />
                <RoutesContainer handleOpen={onOpen} />
                <Copyright />
                <Sidebar isOpen={isOpen} onClose={onClose} />
            </Flex>
    )
}

export default App
