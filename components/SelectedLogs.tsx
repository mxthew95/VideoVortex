import React, { FC, useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { LogInterface, ModeInterface, ResultInterFace, SelectedLogsProps } from '../src/types'
import { _DEFAULT_ITEMS } from '../src/default';

const SelectedLogs: FC<SelectedLogsProps> = ({
    selectedLogs,
    result,
    logs,
    modeSettings,
    carousel,
    isSwitchEnabled,
    setSelectedLogs,
    setResult,
    setLogs,
    setModeSettings
}) => {

    const [totalFWD, setTotalFWD] = useState(0)
    const [totalREW, setTotalREW] = useState(0)
    const [totalTS, setTotalTS] = useState(0)
    const [totalMONEY, setTotalMONEY] = useState(0)

    useEffect(() => {
        setTotalSelectedLogResult();
    })

    const setTotalSelectedLogResult = (): void => {
        setTotalFWD(selectedLogs.filter(el => el.type === 'forward').reduce((a, c) => c.value + a, 0));
        setTotalREW(selectedLogs.filter(el => el.type === 'rewind').reduce((a, c) => Math.abs(c.value) + a, 0));
        setTotalTS(selectedLogs.filter(el => el.type === 'timeshift').reduce((a, c) => c.value + a, 0));
        setTotalMONEY(selectedLogs.filter(el => el.type === 'money+' || el.type === 'money-').reduce((a, c) => c.value + a, 0));
    }

    const handleDelete = (): void => {
        const _result = {
            fwd: result.fwd - totalFWD - totalTS,
            rew: result.rew - totalREW - totalTS,
            money: result.money - totalMONEY
        };

        const ids = selectedLogs.map(el => el.id);

        const _logs = logs.filter(el => ids.indexOf(el.id) < 0);

        let _items, _index;

        if (!modeSettings.defaultMode) {
            _items = _DEFAULT_ITEMS.filter(el => el < 1 ? Math.abs(el) <= _result.money : true);
            _index = _result.money;
        }
        else if (modeSettings.defaultMode && isSwitchEnabled) {
            _items = _DEFAULT_ITEMS.slice(20);
            _index = 0;
        }
        else if (modeSettings.defaultMode && !isSwitchEnabled) {
            _items = _DEFAULT_ITEMS
            _index = 20;
        }

        setLogs(_logs)
        setSelectedLogs([]);
        setResult(_result);
        setModeSettings({ ...modeSettings, validItems: _items });

        carousel.snapToItem(_index);
    };

    if (selectedLogs.length > 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.selectedLogText}>{selectedLogs.length} selected</Text>
                <View>
                    <Text style={styles.selectedLogText}>FWD: {totalFWD}</Text>
                    <Text style={styles.selectedLogText}>REW: {totalREW}</Text>
                    <Text style={styles.selectedLogText}>TS: {totalTS}</Text>
                    <Text style={styles.selectedLogText}>$: {totalMONEY}</Text>
                </View>
                <TouchableOpacity
                    onPress={handleDelete}
                >
                    <View style={styles.deleteButton}>
                        <Image style={styles.deleteIcon} source={require('../trash.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (<></>);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        opacity: 0.9,
        padding: 5,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    selectedLogText: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: "JosefinSans-Regular",
        color: 'black'
    },
    deleteButton: {
        height: 40,
        width: 40,
        borderRadius: 10,
    },
    deleteIcon: { width: 40, height: 40 }
})

const mapStateToProps = state => ({
    selectedLogs: state.selectedLogs,
    result: state.result,
    logs: state.logs,
    modeSettings: state.modeSettings,
    carousel: state.carousel,
    isSwitchEnabled: state.isSwitchEnabled
})

const mapDispatchToProps = dispatch => {
    return {
        setSelectedLogs: (selectedLogs: LogInterface[]): void => dispatch({ type: 'SET_SELECTED_LOGS', selectedLogs }),
        setResult: (result: ResultInterFace): void => dispatch({ type: 'SET_RESULT', result }),
        setModeSettings: (modeSettings: ModeInterface): void => dispatch({ type: 'SET_MODE_SETTINGS', modeSettings }),
        setLogs: (logs: LogInterface[]): void => dispatch({ type: 'SET_LOGS', logs }),
        setCarousel: (carousel: any): void => dispatch({ type: 'SET_CAROUSEL', carousel }),
        setIsSwitchEnabled: (isSwitchEnabled: boolean): void => dispatch({ type: 'SET_SWITCH', isSwitchEnabled }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedLogs)