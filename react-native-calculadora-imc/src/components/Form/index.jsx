import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Result from './Result'
import styles from './style'

const Form = () => {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura')
    const [imc, setImc] = useState(null)
    const [TextButton, setTextButton] = useState('Calcular')

    const imcCalculator = () => {
        return setImc((weight / (height * height)).toFixed(2))
    }

    const validation = () => {
        if (height != null && weight != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton('Calcular novamente')
            return
        }
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha o peso e altura')
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                    onChangeText={setHeight}
                    value={height}
                ></TextInput>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Ex. 75.35'
                    keyboardType='numeric'
                    onChangeText={setWeight
                    }
                    value={weight}
                ></TextInput>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validation()}>
                        <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                    </TouchableOpacity>
            </View>
            <Result result={imc} message={messageImc} />
        </View>
    )
}

export default Form
