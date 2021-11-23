interface Log {
    id: string,
    time: number
    type: string,
    value: number
}

let test = {
    id: '1',
    time: 1,
    type: 'forward',
    value: 1
}

const initialState: Log[] = [test];

const selectedLogs = (state: Log[] = initialState, action: any): Log[] => {
    switch (action.type) {
        case 'SET_SELECTED_LOGS':
            return action.selectedLogs
        default:
            return state
    }
}

export default selectedLogs