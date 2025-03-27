import { api } from "./api";

const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ======== get all project =========
    getAllProjects: builder.query({
      query: () => ({
        url: "/projects/all",
      }),
    }),
    // ======== get all project =========
    getAllAffiliates: builder.query({
      query: () => ({
        url: "/affiliates/all",
      }),
    }),
  }),
});

export const { useGetAllProjectsQuery, useGetAllAffiliatesQuery } = projectApi;
