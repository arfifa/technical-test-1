import React, { Component } from 'react'
import { View } from 'react-native'

import Header from '../../../components/molecules/Header'
import SearchInput from '../../../components/molecules/SearchInput'

export class HeaderNoteList extends Component {
  render() {
    return (
      <View>
        <Header />
        <SearchInput
          onPress={this.props.onPress}
          valueSearch={this.props.valueSearch}
        />
      </View>
    )
  }
}

export default HeaderNoteList
