//all API calls will be here
// This file is used to create an API slice using Redux Toolkit Query
// It sets up a base query and defines endpoints for fetching data
// Import necessary functions and types from Redux Toolkit Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (_builder) => ({}),
});

export const {} = apiSlice;
