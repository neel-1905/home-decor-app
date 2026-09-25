import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

export const SearchButton = () => {
  return (
    <TouchableOpacity
      onPress={() => router.navigate("/search")}
      className="rounded-full h-12 w-12 flex-center bg-primary"
    >
      <MaterialCommunityIcons name="magnify" size={24} color={"#fff"} />
    </TouchableOpacity>
  );
};
