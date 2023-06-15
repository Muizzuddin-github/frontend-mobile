import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Home from './src/screens/Home';
import Login from './src/screens/Login';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return(
    <MainStack.Navigator initialRouteName='Home'>
      <MainStack.Screen name='Home' component={Home} 
      options={{
        headerStyle : {
          backgroundColor : '#fdba74'
        },
        
      }}/>
    </MainStack.Navigator>
  )
}

function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator mode='Login'>
          <RootStack.Screen name='Main' component={MainStackScreen}
          options={{ headerShown : false }}
          />
          <RootStack.Screen name='Login' component={Login} 
          options={{ headerShown : false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App