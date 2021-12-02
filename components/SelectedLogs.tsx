import React, { FC, useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { SelectedLogsProps } from '../src/types'

const SelectedLogs: FC<SelectedLogsProps> = ({selectedLogs, setSelectedLogs}) => {
    const [totalFWD, setTotalFWD] = useState(0)
    const [totalREW, setTotalREW] = useState(0)
    const [totalTS, setTotalTS] = useState(0)
    const [totalMONEY, setTotalMONEY] = useState(0)

    useEffect(()=>{
        setTotalSelectedLogResult();
    })

    const setTotalSelectedLogResult = () => {
        setTotalFWD(selectedLogs.filter(el => el.type === 'forward').reduce((a, c) => c.value + a, 0));
        setTotalREW(selectedLogs.filter(el => el.type === 'rewind').reduce((a, c) => Math.abs(c.value) + a, 0));
        setTotalTS(selectedLogs.filter(el => el.type === 'timeshift').reduce((a, c) => c.value + a, 0));
        setTotalMONEY(selectedLogs.filter(el => el.type === 'money+' || el.type === 'money-').reduce((a, c) => c.value + a, 0));
    }

    if(selectedLogs.length > 0){
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
                    onPress={()=>{setSelectedLogs()}}
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
})

const mapDispatchToProps = dispatch => {
    let selectedLogs = []
    return {
        setSelectedLogs: () => dispatch({ type: 'SET_SELECTED_LOGS', selectedLogs })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedLogs)