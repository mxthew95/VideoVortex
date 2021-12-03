import React, { FC } from 'react'
import {
  View,
  Dimensions,
} from 'react-native'

import SelectedLogs from './SelectedLogs'
import Logs from './Logs'

const VortexAppBody: FC = () => {
  return (   
    <View>
      <SelectedLogs />
      <Logs />
    </View>
  );
};

export default VortexAppBody;