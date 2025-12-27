import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.container}>
        <Image
          source={{}}
          style={styles.image}
         />
        <Text>profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
})