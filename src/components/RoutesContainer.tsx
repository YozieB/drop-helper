import {Center, Container} from "@chakra-ui/react";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/home.tsx";
import {Regex} from "../pages/regex.tsx";
import Redirect from "../pages/redirect.tsx";
import {NotFound} from "../pages/not-found.tsx";

const _RoutesContainer = ({handleOpen}) => {
    return (
        <Center>
            <Container maxW='550px' centerContent p="0">
                <Routes>
                    <Route path="/" element={<Home title='Drop' handleOpen={handleOpen} />} />
                    <Route path="/regex" element={<Regex title='Regex' />} />
                    <Route path="/redirect" element={<Redirect title='Redirect' />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </Center>
    )
}

export const RoutesContainer = React.memo(_RoutesContainer)