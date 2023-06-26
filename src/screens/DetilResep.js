import { useLayoutEffect, useState } from "react";
import { Text, SafeAreaView, View, Image, FlatList, ScrollView } from "react-native";

const DetilResep = ({ route,navigation }) => {

  const selectedResep = route.params.selectedResep;

  useLayoutEffect(() => {
    navigation.setOptions({
      title : selectedResep.judul
    });
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="px-4 py-5">
          <View>
            <Image
              className="w-60 h-80 bg-center rounded m-auto"
              source={{ uri: "https://iili.io/HPf8PEl.md.jpg" }}
            />
          </View>

          <Text className="text-xl font-bold mb-4 mt-5">
            Resep Masakan : {selectedResep.judul}
          </Text>
          <Text className="text-lg mb-2">Bahan Bahan</Text>

          <FlatList
            data={selectedResep.bahan}
            renderItem={({ item, index }) => {
              return (
                <Text className="ml-3 mb-1 text-base">
                  {index + 1}. {item}
                </Text>
              );
            }}
          />

          <Text className="text-lg mb-2 mt-3">Langkah Langkah</Text>
          <FlatList
            data={selectedResep.proses}
            renderItem={({ item, index }) => {
              return (
                <Text className="ml-3 mb-1 text-base">
                  {index + 1}. {item}
                </Text>
              );
            }}
          />

          <Text className="mt-16 font-bold text-base text-center">
            🎉Selamat Menikmati Masakan Anda 🎉
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetilResep;