import React, { FC } from 'react'
import {
  StyleSheet,
  ImageBackground,
} from 'react-native'

import SelectedLogs from './SelectedLogs'
import Logs from './Logs'

const VortexAppBody: FC = () => {
  return (
    <ImageBackground source={require('../layout.jpg')} style={styles.imgBackground} resizeMode="cover">
      <SelectedLogs />
      <Logs />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imgBackground: { flex: 1 }
})

export default VortexAppBody;