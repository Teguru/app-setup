import { HomeScreen } from '../screens/HomeScreen';
import { AllSongsScreen } from '../screens/Subscreens/AllSongsScreen'
import { PlaylistsScreen } from '../screens/Subscreens/PlaylistsScreen';
import { FavouriteScreen } from '../screens/Subscreens/FavouriteScreen';
import { RecentlyPlayedScreen } from '../screens/Subscreens/RecentlyPlayedScreen';
import { SettingsScreen } from '../screens/Subscreens/SettingsScreen';

export const ROUTES = [
    { name: 'Home', component: HomeScreen, title: 'Library' },
    { name: 'All Songs', component: AllSongsScreen, title: 'All Songs' },
    { name: 'Playlists', component: PlaylistsScreen, title: 'Playlists' },
    { name: 'Favourite', component: FavouriteScreen, title: 'Favourite' },
    { name: 'Recently Played', component: RecentlyPlayedScreen, title: 'Recently Played' },
    { name: 'Settings', component: SettingsScreen, title: 'Settings' }
]