import React, { FC } from 'react'
import {
    StyleSheet,
    ImageBackground,
} from 'react-native'

import SelectedLogs from './SelectedLogs'

const VortexAppBody: FC = () => {
    return (
        <ImageBackground source={require('./layout.jpg')} style={styles.imgBackground} resizeMode="cover">

        {selectedLogs.length > 0 &&
          <SelectedLogs/>
        }
        
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imgBackground: {flex:1}
})

export default VortexAppBody;