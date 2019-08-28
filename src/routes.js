import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';

const NavStack = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
  Main: {
    screen: Main,
  },
});

function App() {
  return createAppContainer(NavStack);
}

export default App;
