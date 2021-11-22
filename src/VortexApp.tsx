import React, { FC } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native'
import VortexAppHeader from '../components/VortexAppHeader';
import VortexAppBody from '../components/VortexAppBody';

const theme: string = '#ffffff'

const VortexApp: FC = () => {
    return (
        <View style={styles.container}>
            <VortexAppHeader />
            <VortexAppBody />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme,
      },
})

export default VortexApp;