import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'
import Logo from './componeents/Logo';
import styles from './componeents/styles';
import TextInputExample from './componeents/TextInputExample';
import Cat from './componeents/Cat';
import Cafe from './componeents/Cafe';

const App = () => {

  const showData = () => {
    alert("Hello Button")
  }

  return (
    <View>
      <Text>Hello React Native</Text>
      <Logo />
      <Button
        onPress={showData}
        title='Click Me' 
      />
      {/* <TextInputExample/> */}
      {/* <Cat/> */}
      {/* <Cafe/> */}
    </View>
  )
}

export default App

