import { userMutations } from "@/features/onboarding/hooks/user.mutations";
import { StepIndicator } from "@/features/onboarding/ui";
import { Button } from "@/shared/components/buttons";
import { AppText, ScreenContentWrapper } from "@/shared/components/ui";
import { IMAGES } from "@/shared/constants";
import { useMutation } from "@tanstack/react-query";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

const TOTAL_STEPS = 4;
const DATA = [
  {
    image: IMAGES.onboarding1,
    title: "Comfortable Space",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: IMAGES.onboarding2,
    title: "Modern Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: IMAGES.onboarding2,
    title: "Styled Living",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    image: IMAGES.onboarding2,
    title: "Relaxing Furniture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
];

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);

  const currentData = DATA[currentStep];

  const { mutateAsync, isPending } = useMutation(
    userMutations.completeOnboarding(),
  );

  const handleLastStep = async () => {
    await mutateAsync();
    router.replace("/home");
  };

  return (
    <View className="flex-1">
      <View className="bg-secondary pb-5 rounded-bl-3xl">
        <Image
          source={currentData.image}
          className="w-full rounded-bl-2xl"
          style={{ height: 510 }}
          contentFit="fill"
        />
      </View>
      <ScreenContentWrapper className="flex-1">
        <View className="flex-1 flex-center">
          <AppText className="text-3xl text-primary mb-6.5" variant="semibold">
            {currentData.title}
          </AppText>
          <AppText className="text-center">{currentData.description}</AppText>
        </View>
        <View className="flex-row justify-between items-center">
          <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          {currentStep === TOTAL_STEPS - 1 ? (
            <Button onPress={handleLastStep} loading={isPending}>
              Continue
            </Button>
          ) : (
            <Button
              variant={`outline`}
              onPress={() => setCurrentStep((s) => s + 1)}
            >
              Next
            </Button>
          )}
        </View>
      </ScreenContentWrapper>
    </View>
  );
}
