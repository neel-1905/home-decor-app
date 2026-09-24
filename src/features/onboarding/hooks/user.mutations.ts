import { mutationOptions } from "@tanstack/react-query";

import { api } from "@/shared/lib";
import type { User } from "@/features/users/types";

export const userMutations = {
  completeOnboarding: () =>
    mutationOptions({
      mutationFn: async () => {
        const response = await api.patch<User>("/users/me/onboarding");

        return response.data;
      },
    }),
};
