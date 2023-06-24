import React, { useEffect, useLayoutEffect } from 'react';
import { SafeAreaView, View, ScrollView, TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import { SvgXml } from 'react-native-svg';

// components
import KontenHome from '../components/KontenHome';
import LogoutButton from '../components/LogoutButton';

const Home = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight : () => (
                <LogoutButton navigation={navigation} />
            )
            
        })
    });

    const SvgPlus = `<svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white"></path> </svg>`
    
    return(
        <SafeAreaView>
            <ScrollView>
                <View className="relative container py-5 px-5 h-screen flex-col bg-orange-50">
                    <KontenHome />
                </View>
            </ScrollView>
                {/* tombol plus */}
                <TouchableOpacity className='absolute right-2 bottom-2'
                onPress={() => {navigation.navigate('Tambah Resep')}}
                >
                    <Shadow distance={2} className='bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center'>
                        <SvgXml xml={SvgPlus} width={'100%'} height={'100%'} />
                    </Shadow>
                </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Home