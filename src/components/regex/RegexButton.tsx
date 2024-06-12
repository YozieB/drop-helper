import {Button} from "@chakra-ui/react";
import React from "react";


interface IRegexButton {
    isDisabled: boolean;
    isRegexRunning: boolean;
}

const _RegexButton = ({isDisabled, isRegexRunning}): React.FC<IRegexButton> => {
    return (
        <Button
            type="submit"
            size="lg"
            isDisabled={isDisabled}
            isLoading={isRegexRunning}
            w="100%"
        >
            Сгенерировать regex
        </Button>
    )
}

export const RegexButton: React.FC<IRegexButton> = React.memo(_RegexButton)