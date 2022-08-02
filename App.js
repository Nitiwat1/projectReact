import { View, Text } from 'react-native'
import React from 'react'
import UserNamePassword from './componeents/UserNamePassword'
import AlertComponent from './componeents/AlertComponent'
import ImageWithTextInput from './componeents/ImageWithTextInput'
import ButtonExample from './componeents/ButtonExample'
import Touchable_Example from './componeents/Touchable_Example'
import TouchablePractice from './componeents/TouchablePractice'
import DynamicStyle from './componeents/DynamicStyle'
import ModelExample from './componeents/ModelExample'
import ModalPractice from './componeents/ModalPractice'

const App = () => {
  return (
    <View style = {{flex:1}}>
      {/* <AlertComponent/> */}
      {/* <ImageWithTextInput/> */}
      {/* <ButtonExample/> */}
      {/* <Touchable_Example/> */}
      {/* <TouchablePractice/> */}
      {/* <DynamicStyle/> */}
      {/* <ModelExample/> */}
      <ModalPractice/>
    </View>
  )
}

export default App