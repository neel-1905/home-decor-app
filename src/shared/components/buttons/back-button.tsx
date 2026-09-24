import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export const BackButton = () => {
  return (
    <TouchableOpacity onPress={() => router.canGoBack() && router.back()}>
      <MaterialCommunityIcons name="arrow-left" size={32} color="black" />
    </TouchableOpacity>
  );
};
