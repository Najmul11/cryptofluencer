import { api } from "./api";

const affiliateApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ======== get all project =========
    getAllAffiliates: builder.query({
      query: () => ({
        url: "/affiliates/all",
      }),
    }),
  }),
});

export const { useGetAllAffiliatesQuery } = affiliateApi;
