import { useForm } from "react-hook-form";
import { authClient, SignUpFormValues, signUpSchema } from "../lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { TouchableOpacity, View } from "react-native";
import { FormDatePicker, FormInput } from "@/shared/components/inputs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Button } from "@/shared/components/buttons";
import { Link, router } from "expo-router";
import { AppText } from "@/shared/components/ui";
import Toast from "react-native-toast-message";

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      dob: "",
      mobile: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const onSubmit = async (data: SignUpFormValues) => {
    const { dob, email, mobile, name, password } = data;
    const { error } = await authClient.signUp.email({
      name,
      email,
      dob,
      mobile,
      password,
    });
    if (error) {
      Toast.show({
        type: "error",
        text1: "Sign up failed",
        text2: error.message,
      });
      return;
    }
    Toast.show({
      type: "success",
      text1: "Sign up successful",
    });
    router.navigate("/home");
  };

  return (
    <View className="gap-4">
      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="Enter email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <FormInput
        control={control}
        name="name"
        label="Name"
        placeholder="Enter name"
        keyboardType="default"
        autoCapitalize="none"
      />

      <FormDatePicker control={control} name="dob" label="Date of Birth" />

      <FormInput
        control={control}
        name="mobile"
        label="Mobile"
        placeholder="Mobile number"
        keyboardType="phone-pad"
        autoCapitalize="none"
      />

      <FormInput
        control={control}
        name="password"
        label="Password"
        placeholder="****"
        autoCapitalize="none"
        rightElement={
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <MaterialCommunityIcons
                name="eye-off-outline"
                size={20}
                color="#666"
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-outline"
                size={20}
                color="#666"
              />
            )}
          </TouchableOpacity>
        }
        secureTextEntry={!isPasswordVisible}
      />

      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="****"
        autoCapitalize="none"
        rightElement={
          <TouchableOpacity
            onPress={() =>
              setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
            }
          >
            {isConfirmPasswordVisible ? (
              <MaterialCommunityIcons
                name="eye-off-outline"
                size={20}
                color="#666"
              />
            ) : (
              <MaterialCommunityIcons
                name="eye-outline"
                size={20}
                color="#666"
              />
            )}
          </TouchableOpacity>
        }
        secureTextEntry={!isConfirmPasswordVisible}
      />

      <Button onPress={handleSubmit(onSubmit)} loading={isSubmitting}>
        Sign Up
      </Button>

      <AppText className="mx-auto mt-4">
        Already a member?{" "}
        <Link className="text-primary underline font-medium" href={`/login`}>
          Login
        </Link>
      </AppText>
    </View>
  );
};
