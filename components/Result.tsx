import React, { FC } from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import Card from './Card';

const Result: FC = (props) => {
    const { fwd, rew, money } = props;

    return (
        <View style={styles.container}>
            <Card>
                <View style={styles.runtime}>
                    <Text style={styles.category}>RUNTIME</Text>
                    <Text>FWD {fwd}</Text>
                    <Text>REW {rew}</Text>
                </View>
            </Card>
            <Card>
                <View style={styles.money}>
                    <Text style={styles.category}>MONEY</Text>
                    <Text style={styles.moneyText}>${money}</Text>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
    runtime: {
        alignItems: 'center',
        width: 120
    },
    category: { fontWeight: 'bold', fontSize: 18, fontFamily: 'monospace' },
    money: {
        alignItems: 'center',
        width: 100,
    },
    moneyText: { fontSize: 20 }
})

export default Result;