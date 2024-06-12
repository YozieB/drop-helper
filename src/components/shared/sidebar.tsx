import {
    Badge,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay, Heading,
    Link, useDisclosure
} from "@chakra-ui/react";
import {Link as ReachLink} from "react-router-dom";
import React from "react";

export default React.memo(function Sidebar ({isOpen, onClose}) {
    const btnRef = React.useRef<HTMLButtonElement>()
    return (
        <Drawer
            size='sm'
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Меню</DrawerHeader>
                <DrawerBody>
                    <Link onClick={onClose} as={ReachLink} to='/'><Heading display="flex" alignItems="end" mb="2" as="h4"><Badge fontSize='xl' colorScheme='default'>Главная страница</Badge></Heading></Link>
                    <Link onClick={onClose} as={ReachLink} to='/regex'><Heading display="flex" alignItems="end" mb="2" as="h4"><Badge fontSize='xl' colorScheme='red'>Regex Helper</Badge></Heading></Link>
                    <Link onClick={onClose} as={ReachLink} to='/redirect'><Heading display="flex" alignItems="end" mb="2" as="h4"><Badge fontSize='xl' colorScheme='yellow'>Redirect Helper</Badge></Heading></Link>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
})