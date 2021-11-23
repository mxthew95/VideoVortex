interface Log {
    id: string,
    time: number
    type: string,
    value: number
}

interface Mode {
    defaultMode: boolean,
    carouselIndex: number,
    selectedModeIndex: number,
    validItems: number[]
}

interface Result {
    money: number,
    fwd: number,
    rew: number
}

export const setModeSettings = (modeSettings: Mode[]) => ({
    type: 'SET_MODE_SETTINGS',
    modeSettings
})

export const setLogs = (logs: Log[]) => ({
    type: 'SET_LOGS',
    logs
})

export const setSelectedLogs = (selectedLogs: Log[]) => ({
    type: 'SET_SELECTED_LOGS',
    selectedLogs
})

export const setResult = (result: Result[]) => ({
    type: 'SET_RESULT',
    result
})