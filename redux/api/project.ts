import { api } from "./api";

const projectApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // ======== get all project =========
    getAllProjects: builder.query({
      query: () => ({
        url: "/projects/all",
      }),
    }),
  }),
});

export const {} = projectApi;
