import React, { FC, useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { connect } from 'react-redux';
import { LogInterface, LogProps } from '../src/types';

const Log: FC<LogProps> = ({item, selectedLogs, setSelectedLogs, logs, result}) => {
    const [logText, setLogText] = useState('')

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

    const handleCheck = (checked: boolean, id:string) => {
        const log: LogInterface = logs.find(log => log.id === id);
        if (checked) {
            setSelectedLogs([...selectedLogs, log]);
        }
        else {
            const filteredLogs: LogInterface[] = selectedLogs.filter(log => log.id !== id);
            setSelectedLogs(filteredLogs);
        }
    };

    return (
        <View style={styles.container}>
            <BouncyCheckbox
                size={25}
                fillColor="#0020f0"
                unfillColor={item.value > result.money ? "#dbdbdb" : "#FFFFFF"}
                textStyle={{
                    ...styles.text,
                    color: item.value > result.money ? '#adadad' : '#000000'
                }}
                text={logText}
                onPress={(isChecked) => { handleCheck(isChecked, item.id) }}
                bounceEffect={1}
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
        setSelectedLogs: selectedLogs => dispatch({type:'SET_SELECTED_LOGS', selectedLogs})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Log);