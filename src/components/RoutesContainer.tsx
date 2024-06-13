import {Center, Container, UseDisclosureReturn} from "@chakra-ui/react";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/home.tsx";
import {Regex} from "../pages/regex.tsx";
import Redirect from "../pages/redirect.tsx";
import {NotFound} from "../pages/not-found.tsx";

interface IRoutesContainer {
    //handleOpen: Pick<UseDisclosureReturn, "onOpen()">
    handleOpen: () => void
}

const _RoutesContainer: React.FC<IRoutesContainer> = ({handleOpen}) => {
    return (
        <Center>
            <Container maxW='550px' centerContent p="0">
                <Routes>
                    <Route path="/" element={<Home title='Drop' handleOpen={handleOpen}/>}/>
                    <Route path="/regex" element={<Regex title='Regex'/>}/>
                    <Route path="/redirect" element={<Redirect title='Redirect'/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Container>
        </Center>
    )
}


export const RoutesContainer = React.memo<IRoutesContainer>(_RoutesContainer)
