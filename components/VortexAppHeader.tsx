import React, { FC } from 'react'
import {
    StyleSheet,
    Text
} from 'react-native'
import { Header } from 'react-native-elements'
import ResetButton from './ResetButton'
const theme: string = '#ffffff'

const VortexAppHeader: FC = () => {
    return (
        <Header
            barStyle="dark-content"
            backgroundColor= {theme}
            placement="left"
            centerContainerStyle={styles.centerContainer}
            centerComponent={<Text style={styles.titleText}>Video Vortex Tracker</Text>}
            rightComponent={<ResetButton />}
        >
        </Header>
    )
}

const styles = StyleSheet.create({
    titleText: { fontSize: 20, fontWeight: 'bold', fontFamily: 'monospace', color:'black'},
    centerContainer: { justifyContent: 'center' }
})

export default VortexAppHeader;