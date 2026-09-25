import { queryOptions } from "@tanstack/react-query";

import { api } from "@/shared/lib";
import type { Category } from "../types";

export const categoryQueries = {
  getAll: () =>
    queryOptions({
      queryKey: ["categories"],
      queryFn: async () => {
        const response = await api.get<Category[]>("/categories");

        return response.data;
      },
    }),
};
