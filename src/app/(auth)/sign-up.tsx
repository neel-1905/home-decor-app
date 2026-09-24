import { SignUpForm } from "@/features/auth/ui/sign-up-form";
import {
  AppText,
  ScreenContentWrapper,
  ScreenHeading,
} from "@/shared/components/ui";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
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
          <ScreenHeading title="Sign up" className="mb-8" />
          <AppText variant="medium" className="text-2xl mb-2">
            Create Account
          </AppText>
          <AppText>Please enter your details to proceed.</AppText>

          <View className="mt-10">
            <SignUpForm />
          </View>
        </ScreenContentWrapper>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
