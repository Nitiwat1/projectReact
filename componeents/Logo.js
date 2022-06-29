import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    const textLogo = "Thai-Nichi"
    const isTH = false;
    return (
        <View>
            <Text style={styles.TextLogo}>TNI</Text>
            <Text>{textLogo}</Text>
            {/* {
                isTH && <Text>ภาษาไทย</Text>
            } */}
            {/* use if/else or conditional operater */}
            {
                isTH
                ?(<Text>ภาษาไทย</Text>)
                :(<Text>ภาษาอังกฤษ</Text>)

            }
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{
        color:"red",
        fontSize:60
    }
})
