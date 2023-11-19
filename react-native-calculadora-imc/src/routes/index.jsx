import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home';
import CalcImc from '../screens/CalcImc'

const { Navigator, Screen } = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Navigator>               
                <Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
                />
                <Screen
                name='CalcImc'
                component={CalcImc}
                options={{
                    headerShown: false
                }}
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default Routes