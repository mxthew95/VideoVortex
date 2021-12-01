import { ResultInterFace } from "../types"

const initialState: ResultInterFace = {
    money: 0,
    fwd: 0,
    rew: 0,
}

const result = (state: ResultInterFace = initialState, action: any): ResultInterFace => {
    switch (action.type) {
        case 'SET_RESULT':
            return action.result

        default: return state
    }
}

export default result