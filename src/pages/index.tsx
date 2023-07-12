import {
    Center,
    Text,
    Badge,
    Container,
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    Link,
    Heading,
    useDisclosure,
    Flex
} from "@chakra-ui/react";
import {Link as ReachLink, Route, Routes} from "react-router-dom";
import { Home } from "./home.tsx";
import { Regex } from "./regex.tsx";
import Redirect from "./redirect.tsx";
import {NotFound} from "./not-found.tsx";
import { HamburgerIcon } from '@chakra-ui/icons'
import React from "react";
function App() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef:React.MutableRefObject<any> = React.useRef()

    return (
        <Flex p="5" direction="column" minHeight='100svh'>
            <Flex justifyContent="end" p="25 0 25 25">
                <Button onClick={onOpen} w="50" h="50">
                    <HamburgerIcon boxSize={6} />
                </Button>
            </Flex>
            <Center>
                <Container maxW='550px' centerContent p="0">
                    <Routes>
                        <Route path="/" element={<Home title='Drop' handleOpen={onOpen} />} />
                        <Route path="/regex" element={<Regex title='Regex' />} />
                        <Route path="/redirect" element={<Redirect title='Redirect' />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Container>
            </Center>
            <Text display="block" fontSize="sm" opacity=".6" mt="auto" textAlign="center" as="samp">
                v0.2 made by <Badge colorScheme='yellow'><a href="https://github.com/YozieB">YozieB</a></Badge>
            </Text>
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
        </Flex>
    )
}

export default App
