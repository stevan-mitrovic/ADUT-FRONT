import { create } from "zustand";
import axios from "axios";
import { TCategories, TFlattenedCategory } from "@/types/categoriesMenu";
import {
  flattenCategories,
  findCategoryByProperty,
} from "@/lib/categoryListHandlers";

const categoryBySlugCache: { [key: string]: TFlattenedCategory } = {};
const categoryByIdCache: { [key: string]: TFlattenedCategory } = {};

type CategoryState = {
  fetched: boolean;
  categories: TCategories;
  flattenedCategories: TFlattenedCategory[];
  fetchCategories: () => void;
  getCategoryByProperty: (
    property: "id" | "slug",
    value: string
  ) => TFlattenedCategory | null;
};

export const useCategoryStore = create<CategoryState>((set, get) => ({
  fetched: false,
  categories: [],
  flattenedCategories: [],
  getCategoryByProperty: (property: "id" | "slug", value: string) => {
    const cachedValue =
      property === "id"
        ? categoryByIdCache[value]
        : property === "slug"
        ? categoryBySlugCache[value]
        : undefined;

    if (cachedValue) {
      return cachedValue;
    } else {
      const flattenedCategories = get().flattenedCategories;
      const res = findCategoryByProperty(flattenedCategories, property, value);

      if (res) {
        if (property === "id") {
          categoryByIdCache[value] = res;
        } else {
          categoryBySlugCache[value] = res;
        }
      }
      return res || null;
    }
  },
  fetchCategories: async () => {
    try {
      const response = await axios.get("/api/categories");

      set({
        fetched: true,
        categories: response?.data?.data,
        flattenedCategories: flattenCategories(response?.data?.data),
      });
    } catch (error) {
      set({
        fetched: true,
        categories: [],
        flattenedCategories: [],
      });
    }
  },
}));
