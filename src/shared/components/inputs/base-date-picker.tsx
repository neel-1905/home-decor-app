import { cn } from "@/shared/utils";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface BaseDatePickerProps {
  label?: string;
  error?: string;
  containerClassName?: string;
  rightElement?: React.ReactNode;
  value?: string;
  onPress?: () => void;
  placeholder?: string;
  className?: string;
}

export function BaseDatePicker({
  label,
  error,
  containerClassName,
  rightElement,
  value,
  onPress,
  placeholder = "Select date",
  className,
}: BaseDatePickerProps) {
  return (
    <View className={cn(`w-full`, containerClassName)}>
      {label && (
        <Text className="mb-1.5 text-sm font-semibold text-foreground">
          {label}
        </Text>
      )}
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        className={cn(
          "border rounded-full py-2.5 px-3 flex-row items-center justify-between",
          error ? "border-destructive" : "border-border",
        )}
      >
        <Text
          className={cn(
            "font-sans flex-1 text-base",
            value ? "text-foreground" : "text-[#666666]",
            className,
          )}
        >
          {value ? value : placeholder}
        </Text>
        {rightElement}
      </TouchableOpacity>
      {error && (
        <Text className="mt-1 text-xs text-destructive font-sans">{error}</Text>
      )}
    </View>
  );
}
