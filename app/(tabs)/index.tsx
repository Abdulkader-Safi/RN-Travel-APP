import Colors from "@/constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginLeft: 20,
              }}
            >
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=male",
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: {
                  width: 2,
                  height: 2,
                },
                shadowOpacity: 0.2,
                shadowRadius: 3,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={styles.container}>
        <Text>Index</Text>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
