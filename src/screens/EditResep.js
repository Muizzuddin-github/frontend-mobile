import { useState } from "react";
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
  SafeAreaView,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const EditResep = ({ route, navigation }) => {
  const editResep = route.params.editResep;
  //   console.log(editResep);

  const [image, setImage] = useState(null);
  const [upFoto, setUpFoto] = useState(null);
  const [judul, setJudul] = useState(editResep.judul);
  const [bahan, setBahan] = useState(editResep.bahan.join("\n"));
  const [langkah, setLangkah] = useState(editResep.proses.join("\n"));

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
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    console.log("Hasil :", result.uri);

    if (result.cancelled) {
      // setImage(result.uri);
      console.log("user batal memilih");
    } else {
      setImage(result.uri);
      setUpFoto(result.base64);
    }
  };

  const uploadFile = async () => {
    let foto = editResep.foto;
    if (upFoto) {
      let base64Img = `data:image/jpg;base64,${upFoto}`;
      let apiUrl = "https://api.cloudinary.com/v1_1/drm4wupig/image/upload";
      let data = {
        file: base64Img,
        upload_preset: "resepMakanan",
      };

      let response = await axios.post(apiUrl, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      foto = response.data.secure_url;
    }

    try {
      const inBahan = bahan.split("\n");
      const inProses = langkah.split("\n");

      await axios.put(
        `https://backend-project-mobile.vercel.app/resep/${editResep._id}`,
        {
          judul: judul,
          foto: foto,
          bahan: inBahan,
          proses: inProses,
        }
      );
      console.log(foto);
      Alert.alert(`Resep ${judul} Berhasil Dirubah`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-3 py-4 h-full bg-white">
          <View>
            <Text className="text-lg font-semibold">Nama Makanan</Text>
            <TextInput
              className="py-2 px-1 bg-slate-200 rounded-md"
              placeholder="Masukkan Nama Makanan"
              onChangeText={(text) => setJudul(text)}
              value={judul}
            />
          </View>
          <View>
            <Text className="text-lg font-semibold">Bahan Makanan</Text>
            <TextInput
              editable
              multiline={true}
              numberOfLines={5}
              style={{ textAlignVertical: "top" }}
              className="py-2 px-1 bg-slate-200 rounded-md"
              placeholder="Masukkan Bahan Makanan"
              onChangeText={(text) => setBahan(text)}
              value={bahan}
            />
          </View>
          <View>
            <Text className="text-lg font-semibold">Cara Masak</Text>
            <TextInput
              editable
              multiline={true}
              numberOfLines={7}
              style={{ textAlignVertical: "top" }}
              className="py-2 px-1 bg-slate-200 rounded-md"
              placeholder="Masukkan Cara Masak"
              onChangeText={(text) => setLangkah(text)}
              value={langkah}
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
            {Image && (
              <Image
                source={{ uri: image || editResep.foto }}
                className="m-auto"
                style={{ width: 150, height: 100 }}
              />
            )}
          </View>
          <View className="flex items-center py-2">
            <TouchableOpacity
              onPress={uploadFile}
              className="bg-logo-orange p-2 rounded-md w-24 "
            >
              <Text className="text-white text-center font-bold">Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditResep;
