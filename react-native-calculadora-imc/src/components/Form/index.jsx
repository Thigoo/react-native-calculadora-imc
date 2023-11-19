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
    const [errorMessage, setErrorMessage] = useState(null)
    const [condition, setCondition] = useState(null)

    const verifImc = () => {
        if (imc == null) {
            setErrorMessage('campo obrigatório*')
        }
    }

    const imcCalculator = () => {
        return setImc((weight / (height * height)).toFixed(2))
    }

    const verifCondition = () => {
        if (imc < 18.5) {
            setCondition('Abaixo do peso')
        } else if (imc < 25) {
            setCondition('Peso ideal (parabéns!)')
        } else if (imc < 30) {
            setCondition('Levemente acima do peso')
        } else if (imc < 35) {
            setCondition('Obesidade grau I')
        } else if (imc < 40) {
            setCondition('Obesidade grau II (severa)')
        } else {
            setCondition('Obesidade grau III (mórbida)')
        }
    }

    const validation = () => {
        if (height != null && weight != null) {
            imcCalculator()
            verifCondition()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton('Calcular novamente')
            verifCondition()
            setErrorMessage(null)
            return
        }
        verifImc()
        setImc(null)
        setCondition(null)
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
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.formInput}
                    placeholder='Ex. 75.35'
                    keyboardType='numeric'
                    onChangeText={setWeight
                    }
                    value={weight}
                ></TextInput>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validation()}>
                    <Text style={styles.textButtonCalculator}>{TextButton}</Text>
                </TouchableOpacity>
            </View>
            <Result result={imc} message={messageImc} condition={condition} />
        </View>
    )
}

export default Form
