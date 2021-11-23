interface Result {
    money: number,
    fwd: number,
    rew: number
}

const initialState: Result = {
    money: 0,
    fwd: 0,
    rew: 0,
}

const result = (state: Result = initialState, action: any): Result => {
    switch (action.type) {
        case 'SET_RESULT':
            return action.result

        default: return state
    }
}

export default result