import { HomeCategoriesList } from "@/features/home/ui";
import { SearchButton } from "@/shared/components/buttons";
import { AppText, ScreenContentWrapper } from "@/shared/components/ui";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScreenContentWrapper className="gap-5">
        <View className="flex-row justify-between items-center">
          <View>
            <AppText className="text-2xl text-primary" variant="semibold">
              Hi, Welcome Back
            </AppText>
            <AppText>Create spaces that bring joy</AppText>
          </View>

          <SearchButton />
        </View>

        <HomeCategoriesList />
        <Text>HomeScreen</Text>
      </ScreenContentWrapper>
    </SafeAreaView>
  );
}
