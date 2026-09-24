import { cn } from "@/shared/utils";
import { ReactNode } from "react";
import { View } from "react-native";

export const ScreenContentWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <View className={cn("pt-safe-offset-3 px-safe-offset-4", className)}>
      {children}
    </View>
  );
};
