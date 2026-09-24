import React, { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Platform } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { BaseDatePicker } from "./base-date-picker";

interface FormDatePickerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  rightElement?: React.ReactNode;
  containerClassName?: string;
}

export function FormDatePicker<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  rightElement,
  containerClassName,
}: FormDatePickerProps<T>) {
  const [showPicker, setShowPicker] = useState(false);

  const formatDateToString = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const displayDate = value ? new Date(value) : new Date();

        const handleChange = (
          event: DateTimePickerEvent,
          selectedDate?: Date,
        ) => {
          if (Platform.OS === "android") {
            setShowPicker(false);
          }
          if (event.type === "set" && selectedDate) {
            onChange(formatDateToString(selectedDate));
          }
        };

        return (
          <>
            <BaseDatePicker
              label={label}
              value={value}
              placeholder={placeholder}
              onPress={() => setShowPicker(true)}
              error={error?.message}
              rightElement={rightElement}
              containerClassName={containerClassName}
            />

            {showPicker && (
              <DateTimePicker
                value={displayDate}
                mode="date"
                display={Platform.OS === "ios" ? "spinner" : "default"}
                onChange={handleChange}
                maximumDate={new Date()}
              />
            )}
          </>
        );
      }}
    />
  );
}
