import { useEffect, useState } from 'react'
import { Shadow } from 'react-native-shadow-2';
import { TouchableHighlight, View, Image, Text, FlatList, Button, Alert } from 'react-native';

const dataResep = [
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
    const [isShow, setIsShow] = useState([]);
    const [_isShow, _setIsShow] = useState([]);
    const showMenuByIdx = (idx) => {
        let showList = isShow;
        showList[idx] = true;
        setIsShow(showList);
        _setIsShow(showList);
        console.log(isShow);
    }
    const handlePressMenu = (idx) => {
        if(isShow[idx] == false){
            Alert.alert("Ke halaman detail")
        } else {
            let showList = isShow;
            showList[idx] = false;
            setIsShow(showList);
            _setIsShow(showList);
        }
    }
    return(
        <>
            {dataResep.map((data,idx) => {
                useEffect(() => {
                    setIsShow((prev) =>[ ...prev, false])
                },[_isShow]);
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
                                <Image source={data.gambar} className={`mr-3 w-24 h-full ${isShow[idx]? 'rounded-tl-md' : 'rounded-l-md'}`} />
                                <View className="py-2 flex-1">
                                    <Text className='font-semibold text-lg'>{data.judul}</Text>
                                    <FlatList 
                                        data={[
                                            {key : data.bahan[0]},
                                            {key : data.bahan[1]},
                                            {key : data.bahan[2]},
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
                        </TouchableHighlight>
                        <View className={`menu bg-white px-5 ${isShow[idx]? '' : 'hidden'} rounded-b-md`}>
                            <View className='my-2'><Button onPress={() => {navigation.replace('Login')}} title='Edit'/></View>
                            <View className='my-2'><Button onPress={() => {navigation.replace('Login')}} title='Hapus'/></View>
                        </View>
                    </Shadow>
                )
            })}
        </>

    )
}
export default KontenHome