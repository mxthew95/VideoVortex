import {_DEFAULT_ITEMS} from '../default';

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