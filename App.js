import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import DetilResep from "./src/screens/DetilResep";
import AddMenu from "./src/screens/AddMenu";
import EditResep from "./src/screens/EditResep";

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#e8772e",
          },
          headerTintColor: "#ffff",
        }}
      />
      <MainStack.Screen
        name="DetilResep"
        component={DetilResep}
        options={{
          headerStyle: {
            backgroundColor: "#e8772e",
          },
          headerTintColor: "#ffff",
        }}
      />
      <MainStack.Screen
        name="Tambah Resep"
        component={AddMenu}
        options={{
          headerStyle: {
            backgroundColor: "#e8772e",
          },
          headerTintColor: "#ffff",
        }}
      />
      <MainStack.Screen
        name="Edit Resep"
        component={EditResep}
        options={{
          headerStyle: {
            backgroundColor: "#e8772e",
          },
          headerTintColor: "#ffff",
        }}
      />
    </MainStack.Navigator>
  );
};

function App() {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator mode="Login" initialRouteName="Login">
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
