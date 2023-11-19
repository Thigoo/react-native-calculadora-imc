import { View, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React from 'react'
import { styles } from './style'
import Title from '../../components/Title'

const Home = () => {

  const navigation = useNavigation()

  const entrar = () => {
      navigation.navigate('CalcImc')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Bem-vindo(a) </Text>
        <Title/>
        <Text style={styles.text}>O IMC, ou Índice de Massa Corporal, é um cálculo que permite avaliar se o peso da pessoa está adequado à sua altura. É importante verificar o IMC porque ele pode indicar riscos de obesidade, desnutrição ou outras doenças relacionadas ao peso. No entanto, o IMC não é o único critério para avaliar a saúde, pois não considera a composição corporal, a idade ou o gênero da pessoa. Por isso, o IMC deve ser interpretado por um profissional de saúde junto com outros fatores</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity
        style={styles.btn}
        onPress={entrar}>
          <Text style={styles.textBtn}>Verifique seu IMC</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home