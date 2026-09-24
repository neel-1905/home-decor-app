import { ReactNode } from "react";
import { View } from "react-native";
import { Heading } from "./heading";
import { BackButton } from "../buttons";

export const ScreenHeading = ({
  leftContent = <BackButton />,
  rightContent,
  title,
}: {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  title: string;
}) => {
  return (
    <View className="relative flex-row justify-between items-center px-safe-offset-4 min-h-11">
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
