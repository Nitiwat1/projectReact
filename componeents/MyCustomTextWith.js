import { View, Text } from 'react-native'
import React from 'react'

const Greeting = ({ fname, lname }) => {
    return (
        <view style={{ alignItems: 'center' }}>
            <text>Your First Name is {fname} and Last name is {lname}</text>
        </view>
    )
};

const MyCustomTextWith = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Greeting fname='Nitiwat' lname='Phomemarasee' />
            <Greeting fname='Kritskorn' lname='Dechalert' />
        </View>
    )
}

export default MyCustomTextWith