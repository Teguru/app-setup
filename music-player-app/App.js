import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import AllSongsScreen from './screens/AllSongsScreen';
import PlaylistsScreen from './screens/PlaylistsScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import RecentlyPlayedScreen from './screens/RecentlyPlayedScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            color: 'white',
            fontWeight: "light"
          },
          contentStyle: {
            backgroundColor: 'black'
          }
        }}
        initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: 'Library',
          }}
        />

        <Stack.Screen
          name='All Songs'
          component={AllSongsScreen}
          options={{
            title: 'All Songs',
          }}
        />

        <Stack.Screen
          name='Playlists'
          component={PlaylistsScreen}
          options={{
            title: 'Playlists',
          }}
        />

        <Stack.Screen
          name='Favourite'
          component={FavouriteScreen}
          options={{
            title: 'Favourite',
          }}
        />

        <Stack.Screen
          name='Recently Played'
          component={RecentlyPlayedScreen}
          options={{
            title: 'Recently Played',
          }}
        />

        <Stack.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            title: 'Settings',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


