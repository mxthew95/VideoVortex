import { ModeInterface, LogInterface, ResultInterFace } from '../types'

export const setModeSettings = (modeSettings: ModeInterface[]) => ({
    type: 'SET_MODE_SETTINGS',
    modeSettings
})

export const setLogs = (logs: LogInterface[]) => ({
    type: 'SET_LOGS',
    logs
})

export const setSelectedLogs = (selectedLogs: LogInterface[]) => ({
    type: 'SET_SELECTED_LOGS',
    selectedLogs
})

export const setResult = (result: ResultInterFace) => ({
    type: 'SET_RESULT',
    result
})