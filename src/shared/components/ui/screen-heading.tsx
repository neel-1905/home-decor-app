import { ReactNode } from "react";
import { View } from "react-native";
import { Heading } from "./heading";
import { BackButton } from "../buttons";
import { cn } from "@/shared/utils";

export const ScreenHeading = ({
  leftContent = <BackButton />,
  rightContent,
  title,
  className,
}: {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  title: string;
  className?: string;
}) => {
  return (
    <View
      className={cn(
        "relative flex-row justify-between items-center min-h-11",
        className,
      )}
    >
      {/* Left content */}
      <View className="z-10">{leftContent}</View>

      {/* Center heading positioned absolutely */}
      <View className="absolute inset-0 justify-center items-center pointer-events-none">
        <Heading text={title} />
      </View>

      {/* Right content (or a dummy spacer view to maintain flex layout if rightContent is empty) */}
      <View className="z-10">{rightContent}</View>
    </View>
  );
};
