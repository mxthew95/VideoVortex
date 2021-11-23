interface Log {
    id: string,
    time: number
    type: string,
    value: number
}

const initialState: Log[] = [];

const logs = (state: Log[] = initialState, action: any): Log[] => {
    switch (action.type) {
        case 'SET_LOGS':
            return action.logs
        default:
            return state
    }
}

export default logs