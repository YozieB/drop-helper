import {Badge, Text} from "@chakra-ui/react";
import React from "react";

const _Copyright = () => {
    return (
        <Text display="block" fontSize="sm" opacity=".6" mt="auto" textAlign="center" as="samp">
            v0.2 made by <Badge colorScheme='yellow'><a href="https://github.com/YozieB">YozieB</a></Badge>
        </Text>
    )
}

export const Copyright = React.memo(_Copyright)