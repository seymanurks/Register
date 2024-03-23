import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Welcome from './pages/Welcome'
import MemberSign from './pages/MemberSign'

const Stack = createNativeStackNavigator()

const App = () => {
  return(
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen 
        name = "WelcomeScreen" 
        component={Welcome}
        options={{
          headerShown: false
        }}
        />

        <Stack.Screen
        name = "MemberSignScreen" 
        component={MemberSign}
        />
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

