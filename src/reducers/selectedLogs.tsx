interface LogInterface {
    id: string,
    time: number
    type: string,
    value: number
}

const selectedLogs = (state: LogInterface[] = [], action: any): LogInterface[] => {
    switch (action.type) {
        case 'SET_SELECTED_LOGS':
            return action.selectedLogs;
        default:
            return state;
    }
}

export default selectedLogs;