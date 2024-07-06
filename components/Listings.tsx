import Colors from "@/constant/Colors";
import { ListingType } from "@/utils/ListingTypes";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type IProp = {
  listings: ListingType[];
  category: string;
};

const Listings = ({ listings, category }: IProp) => {
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />

            <View style={styles.bookmark}>
              <Ionicons
                name="bookmark-outline"
                size={20}
                color={Colors.white}
              />
            </View>

            <Text numberOfLines={1} style={styles.itemTxt} ellipsizeMode="tail">
              {item.name}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text style={styles.itemLocationTxt}>{item.location}</Text>
              </View>

              <Text style={styles.itemPriceText}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View>
      <FlatList
        data={listings.filter((l) => {
          if (category === "All") {
            return l;
          }

          return l.category === category;
        })}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    width: 220,
    marginRight: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 20,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationTxt: {
    fontSize: 12,
  },
  itemPriceText: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
});
