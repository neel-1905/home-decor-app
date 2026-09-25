import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function CategoryScreen() {
  const { categoryId } = useLocalSearchParams<{ categoryId: string }>();

  return (
    <View>
      <Text>CategoryScreen {categoryId}</Text>
    </View>
  );
}
