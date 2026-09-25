import { categoryQueries } from "@/features/category/hooks";
import { useQuery } from "@tanstack/react-query";
import { FlatList, View } from "react-native";
import { HomeCategoryCard } from "./home-category-card";
import { Heading } from "@/shared/components/ui";

export const HomeCategoriesList = () => {
  const { data: categories, isLoading } = useQuery(categoryQueries.getAll());

  return (
    <View>
      <Heading text="Categories" className="mb-4" />
      <FlatList
        horizontal={true}
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          if (isLoading) {
            return (
              <View className="w-20 h-20 bg-muted rounded-xl mx-2 animate-pulse" />
            );
          }
          return <HomeCategoryCard id={item.id} icon={item.icon} />;
        }}
        contentContainerClassName="gap-4"
      />
    </View>
  );
};
