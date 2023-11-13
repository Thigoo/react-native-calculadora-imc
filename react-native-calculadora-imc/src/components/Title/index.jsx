import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const Title = () => {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>NativeHealth</Text>
    </View>
  )
}

export default Title