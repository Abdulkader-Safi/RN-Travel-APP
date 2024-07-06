import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { GroupType } from "@/utils/GroupType";
import Colors from "@/constant/Colors";
import { Ionicons } from "@expo/vector-icons";

type IProp = {
  listings: GroupType[];
};

const GroupListings = ({ listings }: IProp) => {
  const renderItem: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View>
          <Text style={styles.itemText}>{item.name}</Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Ionicons name="star" size={20} color={Colors.primaryColor} />
            <Text style={styles.itemRate}>{item.rating}</Text>
            <Text style={styles.itemReview}>({item.reviews})</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={styles.title}>Top Travel Groups</Text>

      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 14,
  },
  itemRate: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
  itemReview: {
    fontSize: 14,
    color: "#999",
  },
});
