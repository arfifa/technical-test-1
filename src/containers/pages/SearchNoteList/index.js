import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import { CheckBox, ListItem, Body, Button } from 'native-base'
import { connect } from 'react-redux'

import { searchTask } from '../../../config/redux/action/tasks'

export class SearchNoteList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: this.props.tasks.search,
    }
  }

  _handleCheckbox = categories => {
    const { category } = this.state.search
    const find = category.find(c => c.name === categories.name)
    if (find) {
      find.checked = !categories.checked
      this.setState([...category])
    }
  }

  _handleSearh = async () => {
    const { category, keyword } = this.state.search
    const find = category.find(c => c.checked === true)
    if (find || keyword.length > 0) {
      await this.props.dispatch(searchTask(this.state.search))
      this.props.navigation.navigate('Home')
    } else {
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    const { category } = this.state.search
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.keyword}
          placeholder="Type note keyword here ..."
          style={styles.textInput}
          onChangeText={(keyword) => this.setState({
            search: {
              ...this.state.search,
              keyword
            }
          })}
        />
        <View style={styles.containerCategory}>
          <Text>Category</Text>
          {category.map(c =>
            <ListItem onPress={() => this._handleCheckbox(c)} key={c.name}>
              <CheckBox
                checked={c.checked} style={styles.checkBox}
                onPress={() => this._handleCheckbox(c)} />
              <Body>
                <Text>{c.name}</Text>
              </Body>
            </ListItem>
          )}
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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(SearchNoteList)
