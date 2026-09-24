import { ScreenHeading } from "@/shared/components/ui";
import { View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="pt-safe-offset-3">
        <ScreenHeading title="Login" />
      </View>
    </SafeAreaView>
  );
}
