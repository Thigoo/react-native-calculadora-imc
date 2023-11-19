import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import Title from '../../components/Title'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title/>
        <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quaerat tenetur quo ipsa accusantium, maxime similique cupiditate eveniet placeat neque reprehenderit cumque? Odit suscipit inventore nihil natus error ut asperiores.</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity>
          <Text>Verifique seu IMC</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home