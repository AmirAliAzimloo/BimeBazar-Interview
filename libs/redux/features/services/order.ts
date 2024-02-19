import { apiSlice } from "./api";

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addnewOrder: builder.mutation({
      query: (initialOrder) => ({
        url: "/order/completion/",
        method: "POST",
        body: {
          ...initialOrder,
        },
      }),
      invalidatesTags: [{ type: "Address", id: "LIST" }],
    }),
  }),
});

export const { useAddnewOrderMutation } = extendedApiSlice;
