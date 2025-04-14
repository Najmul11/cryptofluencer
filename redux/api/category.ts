import { api } from "./api";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ======== get all project =========
    getAllCategories: builder.query({
      query: () => ({
        url: "/categories/all?",
      }),
    }),
    getSingleCategory: builder.query({
      query: (slug: string) => ({
        url: `/categories/${slug}`,
      }),
    }),
  }),
});

export const { useGetAllCategoriesQuery, useGetSingleCategoryQuery } =
  categoryApi;
