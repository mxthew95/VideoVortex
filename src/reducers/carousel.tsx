const initialState: any = null

const carousel = (state: any = initialState, action: any): any => {
    switch (action.type) {
        case 'SET_CAROUSEL':
            return action.carousel

        default: return state
    }
}

export default carousel