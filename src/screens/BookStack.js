import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BooksList from './BooksList';
import BookmarksList from './BookmarksList';
import BookNotes from './BookNotes';

const Stack = createStackNavigator();

const BookStack = () => {
  return (
    <Stack.Navigator initialRouteName="BooksList" headerMode="none">
      <Stack.Screen name="BooksList" component={BooksList} />
      <Stack.Screen name="BookmarksList" component={BookmarksList} />
      <Stack.Screen name="BookNotes" component={BookNotes} />
    </Stack.Navigator>
  );
};

export default BookStack;
