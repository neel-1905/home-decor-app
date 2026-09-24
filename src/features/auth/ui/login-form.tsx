import { useForm } from "react-hook-form";
import { authClient, LoginFormValues, loginSchema } from "../lib";
import { zodResolver } from "@hookform/resolvers/zod";
import { TouchableOpacity, View } from "react-native";
import { FormInput } from "@/shared/components/inputs";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { Button } from "@/shared/components/buttons";
import { Link, router } from "expo-router";
import { AppText } from "@/shared/components/ui";
import Toast from "react-native-toast-message";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onSubmit = async (data: LoginFormValues) => {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });
    if (error) {
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2: error.message,
      });
      return;
    }
    Toast.show({
      type: "success",
      text1: "Login successful",
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
        name="password"
        label="Password"
        placeholder="****"
        // keyboardType=""
        autoCapitalize="none"
        // secureTextEntry={!isPasswordVisible}
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

      <Button onPress={handleSubmit(onSubmit)} loading={isSubmitting}>
        Login
      </Button>

      <Link
        href={`/forgot-password`}
        className="ml-auto underline text-sm font-sans"
      >
        Forgot Password
      </Link>

      <AppText className="mx-auto mt-4">
        Not a member?{" "}
        <Link className="text-primary underline font-medium" href={`/sign-up`}>
          Sign Up
        </Link>
      </AppText>
    </View>
  );
};
