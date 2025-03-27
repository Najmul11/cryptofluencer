/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiUrl } from "../../utils/constant";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl,
    credentials: "include",
  }),
  tagTypes: [],
  endpoints: (_builder) => ({}),
});

// remove cache functionably
export const resetApiStates = api.util.resetApiState;

/**###################
 * we can use this  
 * dispatch(api.util.resetApiState());
 * or call the fn resetApiStates()
 ##############################*/
