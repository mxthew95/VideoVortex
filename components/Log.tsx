import React, { FC, useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Alert
} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { connect } from 'react-redux';
import { LogInterface, LogProps } from '../src/types';

const Log: FC<LogProps> = ({ item, selectedLogs, setSelectedLogs, logs, result }) => {
    const [logText, setLogText] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        switch (item.type) {
            case 'forward':
                setLogText(`Forward ${item.value}`);
                break;
            case 'rewind':
                setLogText(`Rewind ${Math.abs(item.value)}`);
                break;
            case 'timeshift':
                setLogText(`Timeshift ${item.value}`);
                break;
            case 'money+':
                setLogText(`Money +$${item.value}`);
                break;
            case 'money-':
                setLogText(`Money -$${Math.abs(item.value)}`);
                break;
        }
    })

    const handleCheck = (id: string): void => {
        if (item.type === 'money+' && item.value > result.money) {
            Alert.alert(
                "",
                `You can't remove this log because your money is less than ${item.value} `,
                [
                    { text: "OK" }
                ]
            );
            return;
        }

        const log: LogInterface = logs.find(log => log.id === id);
        if (!isChecked) {
            setSelectedLogs([...selectedLogs, log]);
        }
        else {
            const filteredLogs: LogInterface[] = selectedLogs.filter(log => log.id !== id);
            setSelectedLogs(filteredLogs);
        }

        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={25}
                fillColor="#0020f0"
                unfillColor={isChecked ? "#dbdbdb" : "#FFFFFF"}
                textStyle={{
                    ...styles.text,
                    color: item.type === 'money+' && item.value > result.money ? '#adadad' : '#000000'
                }}
                text={logText}
                onPress={() => { handleCheck(item.id) }}
                bounceEffect={1}
                isChecked={isChecked}
                disableBuiltInState
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        backgroundColor: '#ffffff',
        opacity: 0.9
    },
    text: {
        fontFamily: "monospace",
        textDecorationLine: "none",
        fontSize: 22,
        fontWeight: 'bold',
    }
})

const mapStateToProps = state => ({
    selectedLogs: state.selectedLogs,
    result: state.result,
    logs: state.logs
})

const mapDispatchToProps = dispatch => {
    return {
        setSelectedLogs: (selectedLogs: LogInterface): void => dispatch({ type: 'SET_SELECTED_LOGS', selectedLogs })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Log);