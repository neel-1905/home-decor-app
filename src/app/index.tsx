import { AppText, LoadingScreen } from "@/shared/components/ui";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { IMAGES } from "@/shared/constants";
import { Button } from "@/shared/components/buttons";
import { Redirect, router } from "expo-router";
import { authClient } from "@/features/auth/lib";

export default function LandingScreen() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <LoadingScreen />;

  if (session) return <Redirect href={`/onboarding`} />;

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

        <View className="gap-3">
          <Button
            size={`lg`}
            className="w-52"
            onPress={() => router.navigate("/login")}
          >
            Log In
          </Button>
          <Button
            size={`lg`}
            variant={`secondary`}
            className="w-52"
            onPress={() => router.navigate("/sign-up")}
          >
            Sign Up
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
