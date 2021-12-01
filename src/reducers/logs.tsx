interface LogInterface {
    id: string,
    time: number
    type: string,
    value: number
}

const initialState: LogInterface[] = [];

const logs = (state: LogInterface[] = initialState, action: any): LogInterface[] => {
    switch (action.type) {
        case 'SET_LOGS':
            return action.logs
        default:
            return state
    }
}

export default logs