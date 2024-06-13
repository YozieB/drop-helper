import {Button} from "@chakra-ui/react";
import React from "react";

interface IRedirectButton {
    isDisabled: boolean;
    isRunning: boolean;
}

const _RedirectButton = ({isDisabled, isRunning}: IRedirectButton): React.FC => {
    return (
        <Button
            size="lg"
            isDisabled={isDisabled}
            isLoading={isRunning}
            w="100%"
        >
            Сгенерировать редиректы
        </Button>
    )
}

export const RedirectButton: typeof _RedirectButton = React.memo(_RedirectButton)