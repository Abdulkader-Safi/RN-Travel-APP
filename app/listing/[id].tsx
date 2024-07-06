import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const ListingDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ListingDetails {id}</Text>
    </View>
  );
};

export default ListingDetails;

const styles = StyleSheet.create({});
