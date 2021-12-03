import React, { FC } from 'react'
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native'
import { connect } from 'react-redux';
import { LogInterface, ResultInterFace, ModeInterface, ResetButtonProp } from '../src/types';
import { _DEFAULT_ITEMS } from '../src/default';

const ResetButton: FC<ResetButtonProp> = ({
    carousel,
    setResult,
    setSelectedLogs,
    setIsSwitchEnabled,
    setModeSettings,
    setLogs
}) => {
    const showWarning = () => {
        Alert.alert(
            "",
            `Are you sure you want to reset?`,
            [
                { 
                    text: "OK",
                    onPress: () => {handleReset()}
                },
                { 
                    text: "Cancel",
                    style: "cancel"
                }
            ]
        );
    };

    const handleReset = () => {
        setResult({ fwd: 0, rew: 0, money: 0 });
        setSelectedLogs([]);
        setLogs([]);
        setIsSwitchEnabled(false);
        setModeSettings({
            defaultMode: true,
            carouselIndex: 20,
            selectedModeIndex: 0,
            validItems: _DEFAULT_ITEMS,
        });
        carousel.snapToItem(20);
    };

    return (
        <TouchableOpacity
            onPress={showWarning}
            style={styles.container}
        >
            <Image style={styles.icon} source={require('../rewind.png')} />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        marginRight: 10
    },
    icon: {
        width: 40,
        height: 40
    }
})

const mapStateToProps = state => ({
    carousel: state.carousel
})

const mapDispatchToProps = dispatch => {
    return {
        setSelectedLogs: (selectedLogs: LogInterface[]): void => dispatch({ type: 'SET_SELECTED_LOGS', selectedLogs }),
        setResult: (result: ResultInterFace): void => dispatch({ type: 'SET_RESULT', result }),
        setModeSettings: (modeSettings: ModeInterface): void => dispatch({ type: 'SET_MODE_SETTINGS', modeSettings }),
        setLogs: (logs: LogInterface[]): void => dispatch({ type: 'SET_LOGS', logs }),
        setIsSwitchEnabled: (isSwitchEnabled: boolean): void => dispatch({ type: 'SET_SWITCH', isSwitchEnabled }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);