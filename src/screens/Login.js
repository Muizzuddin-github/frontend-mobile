import { SafeAreaView, View, Text,Button } from 'react-native';

const Home = ({ navigation }) => {
    return(
        <SafeAreaView>
            <View className="container p-5 bg-white h-screen flex-col ">
                <Text className='text-blue-400'>Ini Halaman Login</Text>
                <Button onPress={() => {navigation.replace('Main')}} title='Home'/>
            </View>
        </SafeAreaView>
    )
}

export default Home