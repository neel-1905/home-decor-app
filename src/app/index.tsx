import { AppText, LoadingScreen } from "@/shared/components/ui";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { IMAGES } from "@/shared/constants";
import { Button } from "@/shared/components/buttons";
import { Redirect, router } from "expo-router";
import { authClient } from "@/features/auth/lib";
import { userQueries } from "@/features/users/hooks";
import { useQuery } from "@tanstack/react-query";

export default function LandingScreen() {
  const { data: session, isPending: isSessionPending } =
    authClient.useSession();

  const { data: user, isLoading: isUserLoading } = useQuery({
    ...userQueries.me(),
    enabled: !!session,
  });

  if (isSessionPending) {
    return <LoadingScreen />;
  }

  if (session && isUserLoading) {
    return <LoadingScreen />;
  }

  if (session && user) {
    if (!user.isOnboardingComplete) {
      return <Redirect href="/onboarding" />;
    }

    return <Redirect href="/home" />;
  }

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
            size="lg"
            className="w-52"
            onPress={() => router.navigate("/login")}
          >
            Log In
          </Button>

          <Button
            size="lg"
            variant="secondary"
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
