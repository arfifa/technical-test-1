import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, SearchNoteList } from '../../containers/pages'

const AppNavigationStack = createStackNavigator(
  {
    Home,
    SearchNoteList
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
)

const Router = createSwitchNavigator(
  {
    AppNavigationStack
  },
  {
    headerMode: 'none',
    initialRouteName: 'AppNavigationStack'
  }
)

export default createAppContainer(Router);