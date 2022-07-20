import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

const UserNamePassword = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const showAlert = () => {
        if (!name) {
            alert("Please Enter Name")
        }
        else if (!email) {
            alert("Please Enter Email")
        }
        else {
            alert("Succes")
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter Name"
                onChangeText={(val) => setName(val)}
                value={name}
            />

            <TextInput
                style={styles.textInputStyle}
                placeholder="Enter Email"
                onChangeText={(val) => setEmail(val)}
                value={email}
            />

            <View>
                <Button onPress={showAlert} title="Submit" />
            </View>
        </View>
    );
};



export default UserNamePassword
