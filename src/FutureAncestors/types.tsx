export type SoundRecord = {
    speaker: string,
    topic: string,
    link: string
}

export interface GridSystemProps {
    data: SoundRecord[]
}

export interface HeaderProps {
    display: Display
    setDisplay: React.Dispatch<React.SetStateAction<Display>>
}

export interface MenuToggleProps {
    display: Display
    setDisplay: React.Dispatch<React.SetStateAction<Display>>
}


export interface FormRowProps {
    rowNum: number
}

export enum Display{
    SHORT,
    FULL
}