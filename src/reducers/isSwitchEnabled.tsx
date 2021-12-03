const initialState: boolean = false

const isSwitchEnabled = (state: boolean = initialState, action: any): boolean => {
    switch (action.type) {
        case 'SET_SWITCH':
            return action.isSwitchEnabled

        default: return state
    }
}

export default isSwitchEnabled