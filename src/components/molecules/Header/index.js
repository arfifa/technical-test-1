import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}> - Note List - </Text>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
      height: 50,
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#AAA',
    },
    textHeader: {
      color: 'white',
      fontSize: 18,
      fontWeight: '900'
    },
  }
)

export default Header
