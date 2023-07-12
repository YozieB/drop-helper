import { MouseEventHandler } from "react";

export interface IRegex {
    title: string
}

export interface IHeader {
    title: string
}

export interface IHome {
    title: string,
    handleOpen: MouseEventHandler<HTMLButtonElement>
}