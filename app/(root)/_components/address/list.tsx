"use client";

import Loader from "@/components/ui/loader";
import Sheet from "@/components/ui/sheet";
import { useGetAddressesQuery } from "@/libs/redux/features/services/address";
import SingleAddress from "./single";

interface AddressListProps {
  onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AddressList: React.FC<AddressListProps> = ({ onClose }) => {
  //* get list
  const {
    data: addresses,
    isLoading,
    isSuccess,
    isError,
  } = useGetAddressesQuery();


  return (
    <Sheet
      position="bottom"
      onClose={onClose}
      headerTitle="انتخاب آدرس"
      btntitle="انتخاب"
    >
      {isLoading && <Loader />}
      {isSuccess &&
       (
        <div className="flex flex-col gap-4 pt-5" >
          {
             addresses.ids.map((addressId: number, index: number) => (
              <SingleAddress key={index} id={addressId} />
          ))
          }
        </div>
       )
       }
      {isError && <p>{"لطفا دوباره تلاش کنید"}</p>}
    </Sheet>
  );
};

export default AddressList;
