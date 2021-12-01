import React, { FC } from 'react'
import {
    View,
    FlatList,
    Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import Log from './Log';
import { LogsProps } from '../src/types';

const screen = Dimensions.get("screen");

const Logs: FC<LogsProps> = ({logs, selectedLogs}) => {
    const renderLogItem = ({item}) => {
        return <Log item = {item}/>
    }
    
    return (
        <View style={{ height: selectedLogs.length > 0 ? screen.height - 320 : screen.height - 230 }}>
          {
            logs.length > 0 &&
            <FlatList
              data={logs}
              renderItem={renderLogItem}
              keyExtractor={(item) => item.id}
            />
          }
        </View>
    )
}

const mapStateToProps = state => ({
    logs: state.logs,
    selectedLogs: state.selectedLogs,
})

export default connect(mapStateToProps)(Logs);