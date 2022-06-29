import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Logo from './componeents/Logo';
import styles from './componeents/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.warning]}>Hello React Native</Text>
      <Logo />
    </View>
  )
}

export default App

