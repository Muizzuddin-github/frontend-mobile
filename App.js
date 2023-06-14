import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Text className="text-red-500 font-semibold">Open up App.js to start working on your aplikasi!</Text>
      <StatusBar style="auto" />
    </View>
  );
}