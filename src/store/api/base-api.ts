import { getBaseUrl } from "@/lib/base-url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),

    credentials: "include",
  }),

  tagTypes: ["Auth", "User", "Product", "Order"],

  endpoints: () => ({}),
});
