import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from './componeents/Logo'
import User from './componeents/User'
import LotsOfGreetings from './componeents/LotsOfGreetings'
import MyCustomTextWith from './componeents/MyCustomTextWith'
import Count from './componeents/Count'
import InputText from './componeents/InputText'
import UserNameandPassWord from './componeents/UserNameandPassWord'

const App = () => {
  return (
    <View>
      {/* <Logo/>
      <User/> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText /> */}
      <UserNameandPassWord/>
    </View>
  )
}

export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }
// })