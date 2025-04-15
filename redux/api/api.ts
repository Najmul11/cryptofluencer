/* eslint-disable @typescript-eslint/no-unused-vars */
import { apiUrl } from "@/utils/constant";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
  }),
  tagTypes: [""],
  endpoints: (_builder) => ({}),
});

// remove cache functionably
export const resetApiStates = api.util.resetApiState;

/**###################
 * we can use this  
 * dispatch(api.util.resetApiState());
 * or call the fn resetApiStates()
 ##############################*/
