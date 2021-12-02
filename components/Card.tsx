import React, { FC } from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

const Card: FC = (props) => {
    return (
        <View style={styles.card}>{props.children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 3,
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10
    }
})

export default Card;