import { api } from "./api";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ======== get all project =========
    getAllCategories: builder.query({
      query: () => ({
        url: "/categories/all",
      }),
    }),
  }),
});

export const { useGetAllCategoriesQuery } = categoryApi;
