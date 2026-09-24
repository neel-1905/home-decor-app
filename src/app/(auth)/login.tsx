import { LoginForm } from "@/features/auth/ui";
import {
  AppText,
  ScreenContentWrapper,
  ScreenHeading,
} from "@/shared/components/ui";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        bottomOffset={15}
      >
        <ScreenContentWrapper className="flex-1">
          <ScreenHeading title="Login" className="mb-8" />
          <AppText variant="medium" className="text-2xl mb-2">
            Welcome
          </AppText>
          <AppText>Please enter your details to proceed.</AppText>

          <View className="mt-10">
            <LoginForm />
          </View>
        </ScreenContentWrapper>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
