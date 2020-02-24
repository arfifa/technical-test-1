import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import { CheckBox, ListItem, Body, Button } from 'native-base'

export class SearchNoteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: false,
      keyword: '',
      catagory: '',
      checked1: false,
      checked2: false
    }
  }

  _handleCheckbox = categories => {
    if (categories === "Work") {
      this.setState({
        category: categories,
        checked1: !this.state.checked1
      })
    } else if (categories === "School") {
      this.setState({
        category: categories,
        checked2: !this.state.checked2
      })
    }
  }

  _handleSearh = () => {
    if (this.state.keyword.length > 0 || this.state.checked1 === true || this.state.checked2 === true) {
      alert('ok')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.keyword}
          placeholder="Type note keyword here ..."
          style={styles.textInput}
          onChangeText={(keyword) => this.setState({
            keyword
          })}
        />
        <View style={styles.containerCategory}>
          <Text>category</Text>
          <ListItem onPress={(work) => this._handleCheckbox(work = "Work")}>
            <CheckBox
              checked={this.state.checked1} style={styles.checkBox}
              onPress={(work) => this._handleCheckbox(work = "Work")} />
            <Body>
              <Text>Work</Text>
            </Body>
          </ListItem>
          <ListItem onPress={(school) => this._handleCheckbox(school = "School")}>
            <CheckBox
              checked={this.state.checked2} style={styles.checkBox}
              onPress={(school) => this._handleCheckbox(school = "School")} />
            <Body>
              <Text>School</Text>
            </Body>
          </ListItem>
        </View>
        <Button primary
          style={styles.btnSearch}
          onPress={this._handleSearh}>
          <Text style={styles.textBtnSearh}> search </Text>
        </Button>
      </View >
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      padding: 10,
    },
    containerCategory: {
      marginTop: 10
    },
    textInput: {
      borderWidth: 2,
      color: '#252525',
      borderColor: '#eddbb9',
      paddingHorizontal: 10
    },
    checkBox: {
      marginRight: 20
    },
    btnSearch: {
      justifyContent: 'center'
    },
    textBtnSearh: {
      textAlign: 'center',
      fontSize: 16,
      color: '#FFF'
    }
  }
)

export default SearchNoteList
