import { SafeAreaView, View, Text,Image } from 'react-native';

const Home = () => {
    return(
        <SafeAreaView>
            <View className="container p-5 bg-white h-screen flex-col ">
                <View className="flex-row  rounded-md border-2 border-slate-900 mb-5">
                    <Image source={require('../../assets/favicon.png')} className="mr-3" />
                    <View className="p-2">
                        <Text>Judul Artikel Resep</Text>
                        <Text>Deskripsi artikel...........</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home