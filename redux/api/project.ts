import { api } from "./api";

const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ======== get all project =========
    getAllProjects: builder.query({
      query: (params?: { showOnHomepage?: "YES" | "NO" }) => {
        const queryParams = new URLSearchParams();

        if (params?.showOnHomepage) {
          queryParams.append("showOnHomepage", params.showOnHomepage);
        }

        const queryString = queryParams.toString();
        return {
          url: `/projects/all${queryString ? `?${queryString}` : ""}`,
        };
      },
    }),

    // ======== get all project =========
    getSingleProject: builder.query({
      query: (slug: string) => ({
        url: `/projects/${slug}`,
      }),
    }),
  }),
});

export const { useGetAllProjectsQuery, useGetSingleProjectQuery } = projectApi;
