"use client";

import CheckBox from "@/components/fields/checkbox";
import {
  useGetAddressesQuery,
  extendedApiSlice as addressApi,
} from "@/libs/redux/features/services/address";
import { useAppDispatch } from "@/libs/redux/hooks";
import { AddressInterface } from "@/types";
import { useEffect } from "react";

interface SingleAddressProps {
  id: number;
}

const SingleAddress: React.FC<SingleAddressProps> = ({ id }) => {
  //* redux utils
  const dispatch = useAppDispatch();

  //* get single address from normalized data
  const { address } = useGetAddressesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      address: data?.entities[id],
    }),
  });

  //* handel change
  const onChange = (id: number, isChecked: boolean) => {
    const queryUpdate = addressApi.util.updateQueryData(
      "getAddresses",
      undefined,
      (draftAddresses) => {
        if (!draftAddresses) {
          return { entities: {}, ids: [] };
        }
        const updatedAddresses = Object.values(draftAddresses.entities).map(
          (address: AddressInterface) =>
            address.id === id
              ? { ...address, checked: isChecked }
              : { ...address, checked: false }
        );
        return {
          entities: updatedAddresses.reduce(
            (acc, addr) => ({ ...acc, [addr.id]: addr }),
            {}
          ),
          ids: draftAddresses.ids,
        };
      }
    );

    dispatch(queryUpdate);
  };

  useEffect(() => {

    //* clear checked on unmount
    return () => {
      const queryUpdate = addressApi.util.updateQueryData(
        "getAddresses",
        undefined,
        (draftAddresses) => {
          if (!draftAddresses) {
            return { entities: {}, ids: [] };
          }
          const updatedAddresses = Object.values(draftAddresses.entities).map(
            (address: AddressInterface) => ({ ...address, checked: false })
          );
          return {
            entities: updatedAddresses.reduce(
              (acc, addr) => ({ ...acc, [addr.id]: addr }),
              {}
            ),
            ids: draftAddresses.ids,
          };
        }
      );

      dispatch(queryUpdate);
    };
  }, [dispatch]);

  return !!address ? (
    <>
      <div>
        <CheckBox
          label={address.name}
          id={address.id}
          isChecked={address?.checked ?? false}
          onChange={onChange}
        />
        <p
        className="
        font-DanaRegular
        text-custom-zinc-700
        text-xs/[18.19px]
        mr-[36px]
        "
        >{address.details}</p>
      </div>
    </>
  ) : null;
};

export default SingleAddress;
