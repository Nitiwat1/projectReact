import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import React from 'react'

const AlertComponent = () => {

    const simpleAlertHanler = () => {
        alert('Hello I am Simple Alert from JavaScript')

    }

    const twoOptionAlertHanler = () =>{
        Alert.alert(
            //titel
            'Hello',
            //body
            'Hello I am Two Option Alert form React Native',
            [
                {
                    text:'Yes',
                    onPress: ()=> console.log('Yes Pressed')
                },
                {
                    text:'No',
                    onPress: ()=> console.log('No Pressed'),
                    style:'cancel'
                }
            ],
            //clicking out side of alert will not cancel
            {cancelable:false}
        );
    }
    return (
        <View style={styles.container}>
            <Button
                title='Simple Alert'
                onPress={simpleAlertHanler}
            />
            <Button
                title='Alert with Two Options'
                onPress={twoOptionAlertHanler}
            />
        </View>
    )
}

export default AlertComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        marginTop: 30,
    }
})