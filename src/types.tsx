export interface LogInterface {
    id: string,
    time: number
    type: string,
    value: number
}

export interface ModeInterface {
    defaultMode: boolean,
    carouselIndex: number,
    selectedModeIndex: number,
    validItems: number[]
}

export interface ResultInterFace {
    money: number,
    fwd: number,
    rew: number
}

export interface LogsProps {
    logs: LogInterface[],
    selectedLogs: LogInterface[],
}