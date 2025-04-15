import { api } from "./api";

const businessApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // getAllBusiness-------------------
    getAllBusiness: builder.query({
      query: () => ({
        url: "/business",
      }),
    }),
  }),
});

export const { useGetAllBusinessQuery } = businessApi;
