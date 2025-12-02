import cn from "clsx";
import React from "react";
import { KeyboardTypeOptions, Text, TextInput, View } from "react-native";

interface CustomInputProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  label: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}
export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  setValue,
  label,
  keyboardType = "default",
  secureTextEntry = false,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View className="w-full">
      <Text className="label">{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor="#888"
        className={cn(
          "input",
          isFocused ? "border-primary" : "border-gray-300"
        )}
      />
    </View>
  );
};
