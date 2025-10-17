import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const placeHolderApi = createApi ({
    reducerPath: "placeHolderApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/posts/1/comments"}),
    endpoints: (builder) => ({
        getPlaceById: builder.query({
            query: () => ``
        })
    })
})