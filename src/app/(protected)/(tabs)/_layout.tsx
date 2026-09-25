import { useTheme } from "@/shared/hooks";
import { MaterialIconName } from "@/shared/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

const TabIcon = ({
  icon,
  size = 30,
  isFocused,
}: {
  icon: MaterialIconName;
  size?: number;
  isFocused: boolean;
}) => {
  const {
    colors: { primary, foregroundMuted },
  } = useTheme();

  return (
    <MaterialCommunityIcons
      name={icon}
      size={size}
      color={isFocused ? primary : foregroundMuted}
    />
  );
};

export default function TabsLayout() {
  const {
    colors: { primary, foregroundMuted },
  } = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: primary,
        tabBarInactiveTintColor: foregroundMuted,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70, // Clean, fixed height
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarItemStyle: {
          flex: 1, // Take up equal width
          justifyContent: "center", // Center vertically
          alignItems: "center", // Center horizontally
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} icon="home-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} icon="view-grid-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} icon="cart-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} icon="heart-outline" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon isFocused={focused} icon="account-outline" />
          ),
        }}
      />
    </Tabs>
  );
}
