import React, { FC } from 'react'
import VortexApp from './components/VortexApp'
import store from './src/store'
import { Provider } from 'react-redux'

const App: FC = () => {

  return (
    <Provider store={store}>
      <VortexApp />
    </Provider>
  )
}

export default App;