import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import { inferAdditionalFields } from "better-auth/client/plugins"; // 👈 1. Import this
import * as SecureStore from "expo-secure-store";

const baseURL = process.env.EXPO_PUBLIC_API_BASE_URL;

if (!baseURL) {
  throw new Error("EXPO_PUBLIC_API_BASE_URL is not defined");
}

export const authClient = createAuthClient({
  baseURL,
  plugins: [
    expoClient({
      scheme: "homedecorapp",
      storagePrefix: "homedecorapp",
      storage: SecureStore,
    }),

    inferAdditionalFields({
      user: {
        mobile: { type: "string" },
        dob: { type: "string" },
      },
    }),
  ],
});
