import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { StyleSheet } from 'react-native'

import Button from './components/button/Button';

const Welcome = () => {
    return(
        <SafeAreaView style= {styles.container}>
            <Text style = {styles.title}>Welcome</Text>
            <Button text="Create Membership" onPress={null}></Button>
        </SafeAreaView>
    )
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      margin: 10
    }
  })