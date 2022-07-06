import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const UserNameandPassWord = () => {

    const [userName, setUserName] = useState('');
    const [passWord, setPassWord] = useState('');


    return (
        <View style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
            <TextInput
                value={userName}
                onChangeText={(userName) => { setUserName(userName) }}
                style={styles.input}
                placeholder='Email'
            />
            <TextInput
                value={passWord}
                onChangeText={(passWord) => { setPassWord(passWord) }}
                style={styles.input}
                placeholder='Password'
            />
            <Button
                title='Submit'
                onPress={() => alert('Email : ' + userName + '\nPassword : ' + passWord)}
                style={styles.submitButton}
                color='#7a42f4'
            />
        </View>
    )
}

export default UserNameandPassWord

const styles = StyleSheet.create({
    container: {
        padding: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
    },
    submitButton: {
        padding: 10,
        margin: 15,
        height: 40,
        
    },
    subnitButtonText: {
        color: 'white'
    },
});