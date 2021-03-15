import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';

export default function BookNotes({route}) {
  const {title} = route.params;
  const [notes, setNotes] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.titleStyle}>{title}</Text>
        <TextInput style={styles.input} onChangeText={setNotes} value={notes} />
        <Button title="submit" onPress={() => alert(notes)} />
      </View>
      <View style={{flex: 3}}>
        <Text>{notes}</Text>
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
