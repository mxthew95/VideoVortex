import React, { FC } from 'react'
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const handleCheck = (checked, id) => {
    const log = logs.find(log => log.id === id);
    if (checked) {
        setSelectedLogs([...selectedLogs, log]);
    }
    else {
        let temp = selectedLogs.filter(log => log.id !== id);
        setSelectedLogs(temp);
    }
};

const renderLogItem = ({ item }) => {
    let shouldDisableCheckbox = false;
    let LogText;
    switch (item.type) {
        case 'forward':
            LogText = `Forward ${item.value}`;
            break;
        case 'rewind':
            LogText = `Rewind ${Math.abs(item.value)}`;
            break;
        case 'timeshift':
            LogText = `Timeshift ${item.value}`;
            break;
        case 'money+':
            LogText = `Money +$${item.value}`;
            break;
        case 'money-':
            LogText = `Money -$${Math.abs(item.value)}`;
            break;
    }

    if (item.value > result.money) {
        shouldDisableCheckbox = true;
    }

    return (
        <View style={styles.log}>
            <BouncyCheckbox
                size={25}
                fillColor="#0020f0"
                unfillColor={shouldDisableCheckbox ? "#dbdbdb" : "#FFFFFF"}
                textStyle={{
                    fontFamily: "monospace",
                    textDecorationLine: "none",
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: shouldDisableCheckbox ? '#adadad' : '#000000'
                }}
                text={LogText}
                onPress={(isChecked) => { handleCheck(isChecked, item.id) }}
                bounceEffect={1}
            />
        </View>
    );
};

const Logs: FC = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={logs}
                renderItem={renderLogItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { height: selectedLogs.length > 0 ? screen.height - 320 : screen.height - 230 }
})

export default Logs;