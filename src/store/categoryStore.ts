import { create } from "zustand";
import axios from "axios";
import { TCategories } from "@/types/categoriesMenu";

type CategoryState = {
  categories: TCategories;
  fetchCategories: () => void;
};

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  fetchCategories: async () => {
    try {
      const response = await axios.get("/api/categories");

      set({
        categories: response?.data?.data,
      });
    } catch (error) {
      set({
        categories: [],
      });
    }
  },
}));
