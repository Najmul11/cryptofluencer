import { api } from "./api";

const affiliateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ======== get all project =========
    getAllBanners: builder.query({
      query: () => ({
        url: "/banners/all",
      }),
    }),
  }),
});

export const { useGetAllBannersQuery } = affiliateApi;
