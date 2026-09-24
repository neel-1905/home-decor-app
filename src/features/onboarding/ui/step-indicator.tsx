import React from "react";
import { View, Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { cn } from "@/shared/utils";

interface StepIndicatorProps {
  totalSteps: number;
  currentStep: number; // 0-indexed
  onStepPress?: (step: number) => void;
}

export function StepIndicator({ totalSteps, currentStep }: StepIndicatorProps) {
  return (
    <View className="flex-row items-center justify-center gap-2 my-4">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const isActive = index === currentStep;

        // Animate the width and background color smoothly
        const animatedStyle = useAnimatedStyle(() => {
          return {
            width: withSpring(isActive ? 44 : 12, {
              damping: 15,
              stiffness: 150,
            }),
          };
        }, [isActive]);

        return (
          <Pressable key={index} className="h-3 rounded-full overflow-hidden">
            <Animated.View
              style={[animatedStyle]}
              className={cn(
                "h-full rounded-full",
                isActive ? "bg-primary" : "bg-primary-muted",
              )}
            />
          </Pressable>
        );
      })}
    </View>
  );
}
