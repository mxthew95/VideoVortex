import React, { FC } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import VortexApp from './src/VortexApp'

const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogErrVisible, setDialogErrVisible] = useState(false);
  const [selectedLogs, setSelectedLogs] = useState([]);
  const [logs, setLogs] = useState([]);
  const [result, setResult] = useState({ fwd: 0, rew: 0, money: 0 });
  const [modeSettings, setModeSettings] = useState({
    defaultMode: true,
    carouselIndex: 20,
    selectedModeIndex: 0,
    validItems: _DEFAULT_ITEMS,
  });

const initialState = {
  
}

const reducer = (state = initialState) => {
  return state;
}

const store = createStore(reducer)

const App: FC = () => {
  
  return(
    <Provider store={store}>
      <VortexApp/>
    </Provider>
  )
}

export default App;