import React, { FC } from 'react';
import {
    Dimensions,
    ImageBackground,
    StyleSheet
} from 'react-native'
import VortexAppHeader from '../components/VortexAppHeader';
import VortexAppBody from '../components/VortexAppBody';
import ActionsSheet from './ActionsSheet'
const theme: string = '#ffffff';
const screen = Dimensions.get('screen');

const VortexApp: FC = () => {
    return (
        <ImageBackground style={styles.imgBackground} source={require('../layout.jpg')}>
            <VortexAppHeader />
            <VortexAppBody />
            <ActionsSheet />
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    imgBackground: {height: screen.height, width: screen.width}
});

export default VortexApp;