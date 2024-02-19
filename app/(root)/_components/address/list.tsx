"use client";
import { UseFormSetValue } from "react-hook-form";

import Loader from "@/components/ui/loader";
import Sheet from "@/components/ui/sheet";
import { useGetAddressesQuery } from "@/libs/redux/features/services/address";
import SingleAddress from "./single";
import toast from "react-hot-toast";

interface AddressListProps {
  onClose: () => void;
  setValue: UseFormSetValue<any>;
}

const AddressList: React.FC<AddressListProps> = ({ onClose, setValue }) => {
  //* get list
  const {
    data: addresses,
    isLoading,
    isSuccess,
    isError,
  } = useGetAddressesQuery();


  const btnAction = () => {
    if (isSuccess) {
      const checkedAddress = Object.values(addresses.entities).find(
        (address) => address.checked
      );
      if (!!checkedAddress) {
        setValue("addressId", [{name : checkedAddress.name , id : checkedAddress.id}]);
        toast.success("آدرس با موفقیت انتخاب شد");
        onClose();
      } else {
        toast.error("لطفا آدرس را انتخاب کنید");
        return;
      }
    }
  };

  return (
    <Sheet
      position="bottom"
      onClose={onClose}
      headerTitle="انتخاب آدرس"
      btntitle="انتخاب"
      btnAction={btnAction}
    >
      {isLoading && <Loader />}
      {isSuccess && (
        <div className="flex flex-col gap-4 pt-5">
          {addresses.ids.map((addressId: number, index: number) => (
            <SingleAddress key={index} id={addressId} />
          ))}
        </div>
      )}
      {isError && <p>{"لطفا دوباره تلاش کنید"}</p>}
    </Sheet>
  );
};

export default AddressList;
