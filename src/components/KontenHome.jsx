import { useEffect, useState } from 'react'
import { Shadow } from 'react-native-shadow-2';
import { TouchableHighlight, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const _dataResep = [
    {
        "judul" : "Fettucine Carbonara",
        "bahan" : ["Fettucine","Smoked Beef", "Susu"],
        "gambar" : require("../../assets/carbonara.jpeg")
    },
    {
        "judul" : "Fettucine Carbonara",
        "bahan" : ["Fettucine","Smoked Beef", "Susu"],
        "gambar" : require("../../assets/carbonara.jpeg")
    },
    {
        "judul" : "Fettucine Carbonara",
        "bahan" : ["Fettucine","Smoked Beef", "Susu"],
        "gambar" : require("../../assets/carbonara.jpeg")
    },
]

const KontenHome = () => {
    const navigation = useNavigation();

    const [isShow, setIsShow] = useState([]);
    const [_isShow, _setIsShow] = useState([]);
    const [dataResep, setDataResep] = useState([]);

    useEffect(() => {
        axios.get('https://backend-project-mobile.vercel.app/resep').then((data) => setDataResep(data.data.data));
        for(const data of dataResep){
            setIsShow((prev) =>[ ...prev, false])
        }
    }, [_isShow]);
    
    const showMenuByIdx = (idx) => {
        let showList = isShow;
        showList[idx] = true;
        setIsShow(showList);
        _setIsShow(showList);
        console.log(isShow);
    };

    const handlePressMenu = (idx) => {
        if(isShow[idx] == false){
            navigation.navigate('DetilResep', {
                selectedResep : dataResep[idx]
            });
        } else {
            let showList = isShow;
            showList[idx] = false;
            setIsShow(showList);
            _setIsShow(showList);
            console.log(isShow);
        }
    };

    return(
        <>
            {dataResep.map((data,idx) => {

                return(
                    <Shadow
                        distance={3}
                        className='w-full rounded-md mb-2'
                        key={idx}
                    >
                        <TouchableHighlight
                            onPress={() => {handlePressMenu(idx)}}
                            onLongPress={() => {showMenuByIdx(idx)}}
                        >
                            <View className="relative flex-row rounded-md bg-white">
                                <Image source={require("../../assets/carbonara.jpeg")} className={`mr-3 w-24 h-full ${isShow[idx]? 'rounded-tl-md' : 'rounded-l-md'}`} />
                                <View className="py-2 flex-1">
                                    <Text className='font-semibold text-lg'>{data.judul}</Text>
                                    <Text className='text-xs'>{`\u2022 ${data.bahan[0]}`}</Text>
                                    <Text className='text-xs'>{`\u2022 ${data.bahan[1]}`}</Text>
                                    <Text className='text-xs'>{`\u2022 ${data.bahan[2]}`}</Text>
                                </View>
                                <View className='absolute bottom-0 left-0 right-0'>
                                    <Text className='text-xs text-right mb-1 mr-2 underline underline-offset-1 text-logo-orange font-semibold'>Lanjut baca...</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <View className={`menu bg-white px-5 ${isShow[idx]? '' : 'hidden'} rounded-b-md`}>
                            <View className='my-2'>
                                <TouchableOpacity className="bg-amber-500 p-2 rounded-md">
                                    <Text className="text-center text-white text-base font-semibold">
                                        EDIT
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View className='my-2'>
                            <TouchableOpacity className="bg-red-500 p-2 rounded-md">
                                <Text className="text-center text-white text-base font-semibold">
                                    HAPUS
                                </Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </Shadow>
                )
            })}
        </>

    )
}
export default KontenHome