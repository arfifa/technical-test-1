import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Type here ...'
        placeholderTextColor="#252525"
        onChangeText={props.onPress}
      />
      <Icon name="search"
        size={25}
        style={styles.iconSearch}
        onPress={props.onPress}
      />
    </View>
  )
}

styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  textInput: {
    borderWidth: 2,
    color: '#252525',
    borderColor: '#eddbb9',
    paddingHorizontal: 10,
    marginRight: 5,
    flex: 1
  },
  iconSearch: {
    color: '#252525',
    width: 50,
    padding: 10
  }
})

export default SearchInput
