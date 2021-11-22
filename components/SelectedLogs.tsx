import React, { FC } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

const SelectedLogs: FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.selectedLogText}>{/*selected logs array length*/} selected</Text>
            <View>
                <Text style={styles.selectedLogText}>FWD: </Text>
                <Text style={styles.selectedLogText}>REW: </Text>
                <Text style={styles.selectedLogText}>TS: </Text>
                <Text style={styles.selectedLogText}>$: </Text>
            </View>
            <TouchableOpacity

            >
                <View style={styles.deleteButton}>
                    <Image style={styles.deleteIcon} source={require('../trash.png')} />
                </View>
            </TouchableOpacity>
        </View>
    )
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
    },
    deleteButton: {
        height: 40,
        width: 40,
        borderRadius: 10,
    },
    deleteIcon: { width: 40, height: 40 }
})

export default SelectedLogs;