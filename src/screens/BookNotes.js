import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addNote} from '../redux/actions';

export default function BookNotes({route}) {
  const {title} = route.params;
  const [notes, setNotes] = React.useState('');
  const {note} = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(notes) => setNotes(notes)}
          value={notes}
          autoCorrect={false}
        />
        <Button title="submit" onPress={() => dispatch(addNote(notes))} />
      </View>
      <View style={{flex: 3}}>
        <Text>{note}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  titleStyle: {
    fontSize: 25,
    alignSelf: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
