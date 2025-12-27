import { api } from "./api";

type TQuery = {
  showOnHomepage?: "YES" | "NO";
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
};

const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ======== get all project =========
    getAllProjects: builder.query({
      query: (params?: TQuery) => {
        const queryParams = new URLSearchParams();

        if (params?.showOnHomepage) {
          queryParams.append("showOnHomepage", params.showOnHomepage);
        }

        if (params?.search) {
          queryParams.append("search", params.search);
        }

        if (params?.category) {
          queryParams.append("category", params.category);
        }

        if (params?.page) {
          queryParams.append("page", params.page.toString());
        }

        if (params?.limit) {
          queryParams.append("limit", params.limit.toString());
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
