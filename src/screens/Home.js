import React, { useEffect} from 'react';
import { SafeAreaView, View, Text,Image, FlatList, ScrollView, LogBox, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { SvgXml } from 'react-native-svg';

const Home = ({ navigation }) => {
    useEffect(()=>{
        LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
    }, [])

    const SvgPlus = `<svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>`
    return(
        <SafeAreaView>
            <ScrollView>
                <View className="relative container py-5 px-5 h-screen flex-col bg-orange-50">
                    <Shadow
                        distance={3}
                        className='w-full rounded-md mb-2'
                    >
                        <View className="relative flex-row rounded-md bg-white overflow-hidden">
                            <Image source={require('../../assets/carbonara.jpeg')} className="mr-3 w-24 h-full" />
                            <View className="py-2 flex-1">
                                <Text className='font-semibold text-lg'>Fettucine Carbonara</Text>
                                <FlatList 
                                    data={[
                                        {key : 'Fettucine'},
                                        {key : 'Smoked Beef'},
                                        {key : 'Susu'},
                                    ]}
                                    renderItem = {({item}) => {
                                        return(
                                            <View>
                                                <Text className='text-xs'>{`\u2022 ${item.key}`}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View className='absolute bottom-0 left-0 right-0'>
                                <Text className='text-xs text-right mb-1 mr-2 underline underline-offset-1 text-orange-300 font-semibold'>Lanjut baca...</Text>
                            </View>
                        </View>
                    </Shadow>
                    <Shadow
                        distance={3}
                        className='w-full rounded-md mb-2'
                    >
                        <View className="relative flex-row rounded-md bg-white overflow-hidden">
                            <Image source={require('../../assets/carbonara.jpeg')} className="mr-3 w-24 h-full" />
                            <View className="py-2 flex-1">
                                <Text className='font-semibold text-lg'>Fettucine Carbonara</Text>
                                <FlatList 
                                    data={[
                                        {key : 'Fettucine'},
                                        {key : 'Smoked Beef'},
                                        {key : 'Susu'},
                                    ]}
                                    renderItem = {({item}) => {
                                        return(
                                            <View>
                                                <Text className='text-xs'>{`\u2022 ${item.key}`}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View className='absolute bottom-0 left-0 right-0'>
                                <Text className='text-xs text-right mb-1 mr-2 underline underline-offset-1 text-orange-300 font-semibold'>Lanjut baca...</Text>
                            </View>
                        </View>
                    </Shadow>
                    <Shadow
                        distance={3}
                        className='w-full rounded-md mb-2'
                    >
                        <View className="relative flex-row rounded-md bg-white overflow-hidden">
                            <Image source={require('../../assets/carbonara.jpeg')} className="mr-3 w-24 h-full" />
                            <View className="py-2 flex-1">
                                <Text className='font-semibold text-lg'>Fettucine Carbonara</Text>
                                <FlatList 
                                    data={[
                                        {key : 'Fettucine'},
                                        {key : 'Smoked Beef'},
                                        {key : 'Susu'},
                                    ]}
                                    renderItem = {({item}) => {
                                        return(
                                            <View>
                                                <Text className='text-xs'>{`\u2022 ${item.key}`}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View className='absolute bottom-0 left-0 right-0'>
                                <Text className='text-xs text-right mb-1 mr-2 underline underline-offset-1 text-orange-300 font-semibold'>Lanjut baca...</Text>
                            </View>
                        </View>
                    </Shadow>
                    <Shadow
                        distance={3}
                        className='w-full rounded-md mb-2'
                    >
                        <View className="relative flex-row rounded-md bg-white overflow-hidden">
                            <Image source={require('../../assets/carbonara.jpeg')} className="mr-3 w-24 h-full" />
                            <View className="py-2 flex-1">
                                <Text className='font-semibold text-lg'>Fettucine Carbonara</Text>
                                <FlatList 
                                    data={[
                                        {key : 'Fettucine'},
                                        {key : 'Smoked Beef'},
                                        {key : 'Susu'},
                                    ]}
                                    renderItem = {({item}) => {
                                        return(
                                            <View>
                                                <Text className='text-xs'>{`\u2022 ${item.key}`}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View className='absolute bottom-0 left-0 right-0'>
                                <Text className='text-xs text-right mb-1 mr-2 underline underline-offset-1 text-orange-300 font-semibold'>Lanjut baca...</Text>
                            </View>
                        </View>
                    </Shadow>
                    <Shadow
                        distance={3}
                        className='w-full rounded-md mb-2'
                    >
                        <View className="relative flex-row rounded-md bg-white overflow-hidden">
                            <Image source={require('../../assets/carbonara.jpeg')} className="mr-3 w-24 h-full" />
                            <View className="py-2 flex-1">
                                <Text className='font-semibold text-lg'>Fettucine Carbonara</Text>
                                <FlatList 
                                    data={[
                                        {key : 'Fettucine'},
                                        {key : 'Smoked Beef'},
                                        {key : 'Susu'},
                                    ]}
                                    renderItem = {({item}) => {
                                        return(
                                            <View>
                                                <Text className='text-xs'>{`\u2022 ${item.key}`}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View className='absolute bottom-0 left-0 right-0'>
                                <Text className='text-xs text-right mb-1 mr-2 underline underline-offset-1 text-orange-300 font-semibold'>Lanjut baca...</Text>
                            </View>
                        </View>
                    </Shadow>
                    <Shadow
                        distance={3}
                        className='w-full rounded-md mb-2'
                    >
                        <View className="relative flex-row rounded-md bg-white overflow-hidden">
                            <Image source={require('../../assets/carbonara.jpeg')} className="mr-3 w-24 h-full" />
                            <View className="py-2 flex-1">
                                <Text className='font-semibold text-lg'>Fettucine Carbonara</Text>
                                <FlatList 
                                    data={[
                                        {key : 'Fettucine'},
                                        {key : 'Smoked Beef'},
                                        {key : 'Susu'},
                                    ]}
                                    renderItem = {({item}) => {
                                        return(
                                            <View>
                                                <Text className='text-xs'>{`\u2022 ${item.key}`}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View className='absolute bottom-0 left-0 right-0'>
                                <Text className='text-xs text-right mb-1 mr-2 underline underline-offset-1 text-orange-300 font-semibold'>Lanjut baca...</Text>
                            </View>
                        </View>
                    </Shadow>
                    <Shadow
                        distance={3}
                        className='w-full rounded-md mb-2'
                    >
                        <View className="relative flex-row rounded-md bg-white overflow-hidden">
                            <Image source={require('../../assets/carbonara.jpeg')} className="mr-3 w-24 h-full" />
                            <View className="py-2 flex-1">
                                <Text className='font-semibold text-lg'>Fettucine Carbonara</Text>
                                <FlatList 
                                    data={[
                                        {key : 'Fettucine'},
                                        {key : 'Smoked Beef'},
                                        {key : 'Susu'},
                                    ]}
                                    renderItem = {({item}) => {
                                        return(
                                            <View>
                                                <Text className='text-xs'>{`\u2022 ${item.key}`}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View className='absolute bottom-0 left-0 right-0'>
                                <Text className='text-xs text-right mb-1 mr-2 underline underline-offset-1 text-orange-300 font-semibold'>Lanjut baca...</Text>
                            </View>
                        </View>
                    </Shadow>
                    <Shadow
                        distance={3}
                        className='w-full rounded-md mb-2'
                    >
                        <View className="relative flex-row rounded-md bg-white overflow-hidden">
                            <Image source={require('../../assets/carbonara.jpeg')} className="mr-3 w-24 h-full" />
                            <View className="py-2 flex-1">
                                <Text className='font-semibold text-lg'>Fettucine Carbonara</Text>
                                <FlatList 
                                    data={[
                                        {key : 'Fettucine'},
                                        {key : 'Smoked Beef'},
                                        {key : 'Susu'},
                                    ]}
                                    renderItem = {({item}) => {
                                        return(
                                            <View>
                                                <Text className='text-xs'>{`\u2022 ${item.key}`}</Text>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View className='absolute bottom-0 left-0 right-0'>
                                <Text className='text-xs text-right mb-1 mr-2 underline underline-offset-1 text-orange-300 font-semibold'>Lanjut baca...</Text>
                            </View>
                        </View>
                    </Shadow>

                </View>
                {/* tombol plus */}
            </ScrollView>
                <TouchableOpacity className='absolute right-2 bottom-2'
                onPress={() => {navigation.replace('Login')}}
                >
                    <Shadow distance={2} className='bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center'>
                        <SvgXml xml={SvgPlus} width={'100%'} height={'100%'} />
                    </Shadow>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home