import React, { FC } from 'react'
import {
    StyleSheet,
    Image,
    TouchableOpacity

} from 'react-native'

const ResetButton: FC = () => {

    return (
        <TouchableOpacity
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

export default ResetButton;