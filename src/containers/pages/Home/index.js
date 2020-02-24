import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Alert, } from 'react-native'

import { Picker, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

import NoteList from '../../organisms/NoteList'
import HeaderNoteList from '../../organisms/HeaderNoteList/iindex'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noteArray: [
        {
          date: '2020/02/24',
          note: 'Meeting with PT.Barito Integra Teknologi',
          category: 'Work',
          id: '0',
          isDone: false
        }
      ],
      noteText: '',
      category: 'Work',
      id: '',
      editText: '',
      editCategory: '',
      edit: false,
      add: false,
      search: [{
        search: false,
        keyword: '',
        category: ''
      }]
    }
  }

  addNote() {
    this.setState({
      add: !this.state.add
    })
    if (this.state.add === true) {
      if (this.state.noteText && this.state.category) {
        let d = new Date()
        let id = this.state.noteArray.length
        this.state.noteArray.push({
          'date': d.getFullYear() +
            '/' + (d.getMonth() + 1) +
            '/' + d.getDate(),
          'note': this.state.noteText,
          'category': this.state.category,
          'id': id,
          'isDone': false
        })
        this.setState({ noteArray: this.state.noteArray, noteText: '' })

      } else {
        Alert.alert('All form must be filled!')
      }
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1)
    this.setState({ noteArray: this.state.noteArray })
  }

  _handleEditNote(dataThisIndex) {
    this.setState({
      editText: dataThisIndex.note,
      editCategory: dataThisIndex.category,
      edit: true,
      id: dataThisIndex.id,
    })
  }

  _handleChangeEdit() {
    const { noteArray, id, editText, editCategory } = this.state
    noteArray[id].note = editText
    noteArray[id].category = editCategory
    this.setState({ noteText: '', edit: false, add: false, editText: '' })
  }

  _handleCheckBoxNote(checkNote) {
    const { noteArray } = this.state
    let checkNoteData = noteArray.find(note => checkNote.id === note.id)
    if (checkNoteData) {
      checkNoteData.isDone = !checkNote.isDone
      this.setState([...noteArray])

    }
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <NoteList
        key={key}
        keyval={key}
        val={val}
        deleteMethod={() => this.deleteNote(key)}
        editMethod={() => this._handleEditNote(val)}
        checkBoxMethod={() => this._handleCheckBoxNote(val)} />
    })
    return (
      <View style={styles.container}>
        <HeaderNoteList
          onPress={() => this.props.navigation.navigate('SearchNoteList')}
        />
        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>
        {this.state.edit ?
          <View style={styles.footer}>
            <TouchableOpacity style={styles.addButton} onPress={this._handleChangeEdit.bind(this)}>
              <Text style={styles.addButtonText}>EDIT</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              autoFocus
              value={this.state.editText}
              onChangeText={noteText => this.setState({ editText: noteText })} />
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select category"
                selectedValue={this.state.editCategory}
                onValueChange={editCategory => this.setState({ editCategory })}
              >
                <Picker.Item label="Work" value="Work" />
                <Picker.Item label="School" value="School" />
              </Picker>
            </Item>

          </View> :
          <View style={styles.footer}>
            <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
              <Icon name="plus" color="#FFF" size={25} />
            </TouchableOpacity>
            {this.state.add === true &&
              <>
                <TextInput
                  style={styles.textInput}
                  placeholder="Note"
                  autoFocus
                  placeholderTextColor="#fff"
                  value={this.state.noteText}
                  onChangeText={noteText => this.setState({ noteText })} />
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    placeholder="Select category"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.category}
                    onValueChange={category => this.setState({ category })}
                  >
                    <Picker.Item label="Work" value="Work" />
                    <Picker.Item label="School" value="School" />
                  </Picker>
                </Item>
              </>
            }
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1
    },
    scrollContainer: {
      flex: 1,
      marginBottom: 60,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10
    },
    textInput: {
      alignSelf: 'stretch',
      color: '#FFF',
      padding: 10,
      backgroundColor: '#AAA',
      borderTopWidth: 2,
      borderTopColor: "#252525",
      fontFamily: 'McLaren-Regular'
    },
    addButton: {
      position: 'relative',
      marginBottom: 10,
      right: 10,
      backgroundColor: '#E91E63',
      borderWidth: 2,
      borderColor: '#AAA',
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end'
    },
    addButtonText: {
      color: 'white',
      fontSize: 16
    }
  }
)

export default Home
