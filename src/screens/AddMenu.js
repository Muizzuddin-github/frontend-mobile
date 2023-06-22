import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  PermissionsAndroid,
  LogBox,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView 
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const AddMenu = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs([
      'Key "cancelled" in the image picker result is deprecated and will be removed in SDK 48, use "canceled" instead',
    ]);
  }, []);
  const [image, setImage] = useState(null);

  const requestFilePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("File permission Diberikan");
        pickImage();
      } else {
        console.log("File permission Ditolak");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView >
      <ScrollView>
        <View className="px-3 py-4 h-full bg-white">
          <View>
            <Text className="text-lg font-semibold">
              {(nama = "Nama Makanan")}
            </Text>
            <TextInput
              className="py-2 px-1 bg-slate-200 rounded-md"
              placeholder={(InNama = "Masukkan Nama Makanan")}
            />
          </View>
          <View>
            <Text className="text-lg font-semibold">
              {(nama = "Bahan Makanan")}
            </Text>
            <TextInput
              editable
              multiline={true}
              numberOfLines={5}
              style={{ textAlignVertical: "top" }}
              className="py-2 px-1 bg-slate-200 rounded-md"
              placeholder={(InNama = "Masukkan Bahan Makanan")}
            />
          </View>
          <View>
            <Text className="text-lg font-semibold">
              {(nama = "Cara Masak")}
            </Text>
            <TextInput
              editable
              multiline={true}
              numberOfLines={7}
              style={{ textAlignVertical: "top" }}
              className="py-2 px-1 bg-slate-200 rounded-md"
              placeholder={(InNama = "Masukkan Cara Masak")}
            />
          </View>

          <View className="flex justify-between flex-row  py-2">
            <Text className="text-lg font-semibold">Foto :</Text>
            <TouchableOpacity
              className="bg-logo-orange p-2 rounded-md w-24 "
              onPress={requestFilePermission}
            >
              <Text className="text-white text-center font-bold">Upload</Text>
            </TouchableOpacity>
          </View>
          <View>
            {image && (
              <Image
                source={{ uri: image }}
                className="m-auto"
                style={{ width: 150, height: 100 }}
              />
            )}
          </View>
          <View className="flex items-center py-2">
            <TouchableOpacity className="bg-logo-orange p-2 rounded-md w-24 ">
              <Text className="text-white text-center font-bold">Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default AddMenu;
