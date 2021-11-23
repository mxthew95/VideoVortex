import React, { FC } from 'react'
import {
  StyleSheet,
  ImageBackground,
  View,Text
} from 'react-native'

import SelectedLogs from './SelectedLogs'

import { connect } from 'react-redux'

interface Props {
  items: number[]
}

const VortexAppBody: FC<Props> = (props: Props) => {
  return (
    <ImageBackground source={require('../layout.jpg')} style={styles.imgBackground} resizeMode="cover">
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imgBackground: { flex: 1 }
})

export default VortexAppBody;