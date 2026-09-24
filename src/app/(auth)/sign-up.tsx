import { ScreenContentWrapper, ScreenHeading } from "@/shared/components/ui";

import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenContentWrapper>
        <ScreenHeading title="Sign Up" className="mb-8" />
      </ScreenContentWrapper>
    </SafeAreaView>
  );
}
