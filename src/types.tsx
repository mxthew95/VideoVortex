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

export interface LogProps {
    item: any, 
    selectedLogs: LogInterface[], 
    result: ResultInterFace, 
    logs: LogInterface[], 
    setSelectedLogs: Function
}

export interface LogsProps {
    logs: LogInterface[],
    selectedLogs: LogInterface[],
}

export interface SelectedLogsProps {
    selectedLogs: LogInterface[],
    setSelectedLogs: Function
}

export interface ResultProp {
    fwd: number,
    rew: number,
    money: number,
}

export interface ActionsSheetProp {
    result: ResultInterFace,
    modeSettings: ModeInterface,
    logs: LogInterface[],
    selectedLogs: LogInterface[],
    setResult: Function, 
    setModeSettings: Function,
    setLogs: Function
}