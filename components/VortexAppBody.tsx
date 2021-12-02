import React, { FC } from 'react'
import {
  StyleSheet,
  ImageBackground,
  View
} from 'react-native'

import SelectedLogs from './SelectedLogs'
import Logs from './Logs'
import ActionsSheet from './ActionsSheet'

const VortexAppBody: FC = () => {
  return (
    <View>
    <ImageBackground source={require('../layout.jpg')} resizeMode="cover">
      <SelectedLogs />
      <Logs />
    </ImageBackground>       
    <ActionsSheet />
    </View>
  );
};

export default VortexAppBody;