import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    Image
  } from "react-native";
  import { useState } from "react";
  import axios from "axios";
  
  const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const submit = async () => {
      try {
        if (!username) {
          Alert.alert("Login Gagal", "masukkan username terlebih dahulu");
          return;
        }
  
        if (!password) {
          Alert.alert("Login Gagal", "masukkan password terlebih dahulu");
          return;
        }
  
        await axios.post("https://backend-project-mobile.vercel.app/login", {
          username: username,
          password: password,
        });
  
        Alert.alert("Login Berhasil", "selamat datang kembali", [
          {
            text: "OK",
            onPress: () => {
              setUsername("");
              setPassword("");
              navigation.replace("Main");
            },
          },
        ]);
      } catch (err) {
        Alert.alert("Login Gagal", err.response.data.message);
      }
    };
  
    return (
      <SafeAreaView>
        <View className="container p-5 bg-white h-screen flex-col">
          <View className="mt-20">
            <View className="mb-5">
              <Image className="w-full h-36 rounded-md"
              source={require('../../assets/resep-sedap-logo.png')} alt="app-logo" />
            </View>
  
            <View>
              <View className="mb-6">
                <Text className="text-lg font-semibold mb-1">Username</Text>
                <TextInput
                  placeholder="masukkan username"
                  value={username}
                  className="py-1 px-2 border-b border-r border-gray-300 text-base rounded-md"
                  onChangeText={(e) => setUsername(e.trim())}
                />
              </View>
              <View className="mb-5">
                <Text className="text-lg font-semibold mb-1">Password</Text>
                <TextInput
                  placeholder="masukkan password"
                  value={password}
                  className="py-1 px-2 border-b border-r border-gray-300 text-base rounded-md"
                  onChangeText={(e) => setPassword(e.trim())}
                />
              </View>
            </View>
  
            <TouchableOpacity
              className="bg-logo-orange p-2 rounded-md"
              onPress={submit}
            >
              <Text className="text-center text-white text-base font-bold">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Login;

// import { SafeAreaView, View, Text,Button } from 'react-native';

// const Login = ({ navigation }) => {
//     return(
//         <SafeAreaView>
//             <View className="container p-5 bg-white h-screen flex-col ">
//                 <Text className='text-blue-400'>Ini Halaman Login</Text>
//                 <Button onPress={() => {navigation.replace('Main')}} title='Home'/>
//             </View>
//         </SafeAreaView>
//     )
// }

// export default Login