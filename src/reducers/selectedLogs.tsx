interface Log {
    id: string,
    time: number
    type: string,
    value: number
}

const initialState: Log[] = [];

const selectedLogs = (state: Log[] = initialState, action: any): Log[] => {
    switch (action.type) {
        case 'SET_SELECTED_LOGS':
            return action.selectedLogs
        default:
            return state
    }
}

export default selectedLogs