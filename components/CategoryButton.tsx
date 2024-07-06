import Colors from "@/constant/Colors";
import destinationCategories from "@/data/categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CategoryButton = () => {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index: number) => {
    const selected = itemRef.current![index];

    setActiveIndex(index);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
    });
  };

  return (
    <View>
      <Text style={styles.title}>Categories</Text>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          paddingVertical: 10,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            ref={(el) => (itemRef.current[index] = el)}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex === index
                ? styles.categoryActiveBtn
                : styles.categoryBtn
            }
            key={index}
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={activeIndex === index ? Colors.white : Colors.black}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.categoryActiveBtnText
                  : styles.categoryBtnText
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.black,
  },
  categoryActiveBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    gap: 5,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    gap: 5,
  },
  categoryActiveBtnText: {
    color: Colors.white,
  },
  categoryBtnText: {
    color: Colors.black,
  },
});
