import { AppText } from "@/shared/components/ui";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { IMAGES } from "@/shared/constants";

export default function LandingScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 flex-center gap-8 px-safe-offset-4">
        <View className="gap-3 flex-center">
          <Image source={IMAGES.landing} style={{ width: 175, height: 147 }} />
          <AppText
            variant="bold"
            className="uppercase text-6xl tracking-wider text-primary"
          >
            home
          </AppText>
          <AppText
            variant="medium"
            className="uppercase text-5xl -mt-3 tracking-widest text-primary"
          >
            decor
          </AppText>
        </View>

        <View className="w-80">
          <AppText className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </AppText>
        </View>

        <View></View>
      </View>
    </SafeAreaView>
  );
}
