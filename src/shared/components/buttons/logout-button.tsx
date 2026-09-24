import { authClient } from "@/features/auth/lib";
import { Button } from "./button";
import { router } from "expo-router";

export const LogoutButton = () => {
  const handleLogout = async () => {
    await authClient.signOut();
    router.replace("/");
  };

  return <Button onPress={handleLogout}>Logout</Button>;
};
