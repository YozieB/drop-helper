import {Button} from "@chakra-ui/react";
import React from "react";


interface IRegexButton {
    isDisabled: boolean;
    isRegexRunning: boolean;
}

const _RegexButton = ({isDisabled, isRegexRunning}: IRegexButton): React.FC => {
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

export const RegexButton: typeof _RegexButton = React.memo(_RegexButton)