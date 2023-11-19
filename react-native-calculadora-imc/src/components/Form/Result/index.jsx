import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const Result = (props) => {
    return (
        <View style={styles.resultImc}>
            
            <Text style={styles.information}>{props.message}</Text>
            <Text style={styles.numberImc}>{props.result}</Text>
            <Text style={styles.information}>{props.condition}</Text>
            
        </View>
    )
}

export default Result