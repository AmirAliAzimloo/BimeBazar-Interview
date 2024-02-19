import {
  EntityState,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

import { apiSlice } from "./api";
import { AddressInterface } from "@/types";

const addressAdapter = createEntityAdapter<AddressInterface>();

const initialState = addressAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAddresses: builder.query<EntityState<AddressInterface, number>, void>({
      query: () => "/my-addresses/",
      transformResponse: (response: AddressInterface[]) => {
        const loadedAddress = response.map((address) => {
          if (!address.hasOwnProperty("checked")) {
            address.checked = false;
          }

          return address;
        });
        return addressAdapter.setAll(initialState, loadedAddress);
      },
      providesTags: (result) =>
        result
          ? [
              ...result.ids.map((id) => ({ type: "Address" as const, id })),
              { type: "Address", id: "LIST" },
            ]
          : [{ type: "Address", id: "LIST" }],
    }),
  }),
});

export const { useGetAddressesQuery } = extendedApiSlice;