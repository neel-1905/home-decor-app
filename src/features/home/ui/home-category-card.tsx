import { useTheme } from "@/shared/hooks";
import { MaterialIconName } from "@/shared/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

export const HomeCategoryCard = ({
  id,
  icon,
}: {
  id: string;
  icon: MaterialIconName;
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={() =>
        router.navigate({
          pathname: "/categories/[categoryId]",
          params: { categoryId: id },
        })
      }
      className="rounded-2xl bg-secondary flex-center aspect-square p-4 h-23 w-23"
    >
      <MaterialCommunityIcons name={icon} size={40} color={colors.primary} />
    </TouchableOpacity>
  );
};
