import { queryOptions } from "@tanstack/react-query";

import { api } from "@/shared/lib";
import type { User } from "../types";

export const userQueries = {
  me: () =>
    queryOptions({
      queryKey: ["user", "me"],
      queryFn: async () => {
        const response = await api.get<User>("/users/me");

        return response.data;
      },
    }),
};
