import { View } from 'react-native'
import React from 'react'
import Title from '../../components/Title'
import Form from '../../components/Form'
import { styles } from './style'

const CalcImc = () => {
  return (
    <View style={styles.container}>
      <Title/>
      <Form/>
    </View>
  )
}

export default CalcImc

