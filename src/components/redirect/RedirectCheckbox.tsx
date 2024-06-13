import {Checkbox} from "@chakra-ui/react";
import React from "react";

interface IRedirectCheckbox {
    toggleCheckbox: () => void;
    isChecked: boolean;
    isRunning: boolean;
}

const _RedirectCheckbox = ({toggleCheckbox, isChecked, isRunning}: IRedirectCheckbox): React.FC => {
    return (
        <Checkbox
            size="lg"
            width="100%"
            isChecked={isChecked}
            onChange={toggleCheckbox}
            mb="4"
            isDisabled={isRunning}
        >
            Перенаправить все ссылки на конечный сайт
        </Checkbox>
    )
}

export const RedirectCheckbox: typeof _RedirectCheckbox = React.memo(_RedirectCheckbox)
