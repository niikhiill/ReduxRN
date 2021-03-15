import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BooksList from './screens/BooksList';
import BookmarksList from './screens/BookmarksList';
import BookStack from './screens/BookStack';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="BookStack">
        <Tab.Screen name="BookStack" component={BookStack} />
        <Tab.Screen name="BookmarksList" component={BookmarksList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
