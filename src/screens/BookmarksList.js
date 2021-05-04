import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeBookmark} from '../redux/actions';

export default function BookmarksList({navigation}) {
  const {bookmarks} = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const removeFromBookmarkList = (book) => dispatch(removeBookmark(book));

  const handleRemoveBookmark = (book) => {
    removeFromBookmarkList(book);
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

            <View style={{marginTop: 14}}>
              <TouchableOpacity onPress={() => handleRemoveBookmark(item)}>
                <Text>Remove -</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BookNotes', {title: item.title})
                }>
                <Text style={{fontSize: 24, color: '#64676D'}}>Notes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{fontSize: 22, paddingTop: 50, alignSelf: 'center'}}>
          BookmarksList
        </Text>
        <View style={{flex: 1, marginTop: 8}}>
          <FlatList
            data={bookmarks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import React from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';

// import {removeBookmark} from '../redux/actions';

// export default function BookmarksList() {
//   const {bookmarks} = useSelector((state) => state.booksReducer);
//   const dispatch = useDispatch();

//   const removeFromBookmarkList = (book) => dispatch(removeBookmark(book));

//   const handleRemoveBookmark = (book) => {
//     removeFromBookmarkList(book);
//   };

//   const renderItem = ({item}) => {
//     return (
//       <View style={{marginVertical: 12}}>
//         <View style={{flexDirection: 'row', flex: 1}}>
//           {/* Book Cover */}
//           <Image
//             source={{uri: item.image_url}}
//             resizeMode="cover"
//             style={{width: 100, height: 150, borderRadius: 10}}
//           />
//           {/* Book Metadata */}
//           <View style={{flex: 1, marginLeft: 12}}>
//             {/* Book Title */}
//             <View>
//               <Text style={{fontSize: 22, paddingRight: 16, color: 'white'}}>
//                 {item.title}
//               </Text>
//             </View>
//             {/* Meta info */}
//             <View
//               style={{
//                 flexDirection: 'row',
//                 marginTop: 10,
//                 alignItems: 'center',
//               }}></View>
//             {/* Buttons */}
//             <View style={{marginTop: 14}}>
//               <TouchableOpacity
//                 onPress={() => handleRemoveBookmark(item)}
//                 activeOpacity={0.7}
//                 style={{
//                   flexDirection: 'row',
//                   padding: 2,
//                   backgroundColor: '#2D3038',
//                   borderRadius: 20,
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   height: 40,
//                   width: 40,
//                 }}>
//                 <Text>Remove -</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#1E1B26'}}>
//       <View style={{flex: 1, paddingHorizontal: 16}}>
//         <Text style={{color: 'white', fontSize: 22}}>Bookmarks</Text>
//         <View style={{flex: 1, marginTop: 8}}>
//           {bookmarks.length === 0 ? (
//             <Text style={{color: '#64676D', fontSize: 18}}>
//               Add a book to bookmark list.
//             </Text>
//           ) : (
//             <FlatList
//               data={bookmarks}
//               // keyExtractor={(item) => item.id.toString()}
//               keyExtractor={(item, key) => key.toString()}
//               renderItem={renderItem}
//               showsVerticalScrollIndicator={false}
//             />
//           )}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }
