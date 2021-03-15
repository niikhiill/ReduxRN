import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {getBooks, addBookmark, removeBookmark} from '../redux/actions';

export default function BooksListApp({navigation}) {
  const {books, bookmarks, bookerror} = useSelector(
    (state) => state.booksReducer,
  );
  const dispatch = useDispatch();
  const fetchBooks = () => dispatch(getBooks());
  useEffect(() => {
    fetchBooks();
  }, []);

  const addToBookmarkList = (book) => dispatch(addBookmark(book));
  const removeFromBookmarkList = (book) => dispatch(removeBookmark(book));

  const handleAddBookmark = (book) => {
    addToBookmarkList(book);
  };

  const handleRemoveBookmark = (book) => {
    removeFromBookmarkList(book);
  };

  const ifExists = (book) => {
    if (bookmarks.filter((item) => item.id === book.id).length > 0) {
      return true;
    }

    return false;
  };

  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: 12}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Image
            source={{uri: item.image_url}}
            resizeMode="cover"
            style={{width: 100, height: 150}}
          />
          <View style={{flex: 1, marginLeft: 12}}>
            <View>
              <Text style={{fontSize: 22, paddingRight: 16}}>{item.title}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}></View>
            <View>
              <TouchableOpacity
                onPress={() =>
                  ifExists(item)
                    ? handleRemoveBookmark(item)
                    : handleAddBookmark(item)
                }>
                <Text style={{fontSize: 24, color: '#64676D'}}>Add +</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BookNotes', {
                    title: item.title,
                  })
                }>
                <Text style={{fontSize: 24, color: '#64676D'}}>Notes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  if (books.length > 0) {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, paddingHorizontal: 16}}>
          <Text style={{fontSize: 22, paddingTop: 50, alignSelf: 'center'}}>
            Books
          </Text>
          <View style={{flex: 1, marginTop: 8}}>
            <FlatList
              data={books}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 22, paddingTop: 50, alignSelf: 'center'}}>
          {bookerror}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
