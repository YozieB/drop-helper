import { Header } from "../components/header.tsx";
import { IHome } from "../utils/interfaces.tsx";
import {
    Badge,
    Button,
    Text,
} from "@chakra-ui/react";

export const Home = ({title, handleOpen }: IHome) => {
    return (
        <>
            <Header  title={title} />
            <Text textAlign="justify" mt="5" mb="5" fontSize="xl">
                Данный сервис - набор <Badge colorScheme='purple'>утилит</Badge> для помощи в <Badge colorScheme='green'>восстановлении</Badge> дропов. Нажмите на кнопку ниже, чтобы перейти к выбору нужной вам утилиты.
            </Text>
            <Button w="100%" colorScheme='teal' onClick={handleOpen}>
                Выбрать сервис
            </Button>
        </>
    );
}