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
  const {title, id} = route.params;
  const [notes, setNotes] = React.useState('');
  const {note, comments} = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const renderItem = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <Text>{item.id}</Text>
        <Text>{item.comment}</Text>
      </View>
    );
  };
  const ifExists = () => {
    index = comments.findIndex((item) => item.id === id);
    return index;
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.titleStyle}>{id}</Text>
        <Text style={styles.titleStyle}>{title}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(notes) => setNotes(notes)}
          value={notes}
          autoCorrect={false}
        />
        <Button title="submit" onPress={() => dispatch(addNote(id, notes))} />
      </View>
      {ifExists() > 0 ? (
        <View
          style={{flex: 3, justifyContent: 'flex-start', alignItems: 'center'}}>
          {/* <FlatList
            data={comments}
            keyExtractor={(item, key) => key.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          /> */}
          <Text>{comments[index].comment}</Text>
        </View>
      ) : (
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <Text>no comments</Text>
        </View>
      )}
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
