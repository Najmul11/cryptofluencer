import { api } from "./api";

const businessApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // getAllBusiness-------------------
    getAllBusiness: builder.query({
      query: () => ({
        url: "/business",
      }),
    }),

    getMoreBusiness: builder.query({
      query: () => ({
        url: "/more-business/all",
      }),
    }),
  }),
});

export const { useGetAllBusinessQuery, useGetMoreBusinessQuery } = businessApi;
