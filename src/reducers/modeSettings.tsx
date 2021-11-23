const _DEFAULT_ITEMS: number[] = [];
for (let i = -20; i <= 20; i++) {
  _DEFAULT_ITEMS.push(i);
}

interface Mode {
  defaultMode: boolean,
  carouselIndex: number,
  selectedModeIndex: number,
  validItems: number[]
}

const initialState: Mode = {
  defaultMode: true,
  carouselIndex: 20,
  selectedModeIndex: 0,
  validItems: _DEFAULT_ITEMS,
}

const modeSettings = (state:Mode = initialState, action:any):Mode => {
  switch (action.type) {
    case 'SET_MODE_SETTINGS':
      return action.modeSettings
    default:
      return state
  }
}

export default modeSettings