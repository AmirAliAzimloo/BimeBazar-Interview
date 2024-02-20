"use client";
//* pakages
import toast from "react-hot-toast";


//* locales
import SingleAddress from "./single";
import Loader from "@/components/ui/loader";
import Sheet from "@/components/ui/sheet";
import { useGetAddressesQuery } from "@/libs/redux/features/services/address";
import { setValueType } from "@/types/form";
import messages from "@/common/messages";
import { voidFuncType } from "@/types";

interface AddressListProps {
  onClose: voidFuncType;
  setValue: setValueType<any>;
}

const AddressList: React.FC<AddressListProps> = ({ onClose, setValue }) => {
  //* get list
  const {
    data: addresses,
    isLoading,
    isSuccess,
    isError,
  } = useGetAddressesQuery();


  //* validate & set address
  const btnAction = () => {
    if (isSuccess) {
      const checkedAddress = Object.values(addresses.entities).find(
        (address) => address.checked
      );
      if (!!checkedAddress) {
        setValue("addressId", [
          { name: checkedAddress.name, id: checkedAddress.id },
        ]);
        toast.success(messages.address.success);
        onClose();
      } else {
        toast.error(messages.address.error);
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
        <div className="flex flex-col gap-4 pt-5 pb-2">
          {addresses.ids.map((addressId: number, index: number) => (
            <SingleAddress key={index} id={addressId} />
          ))}
        </div>
      )}
      {isError && (
        <h4 className="text-xs font-DanaMedium h-full flex items-center justify-center  text-red-600">
          {"لطفا دوباره تلاش کنید"}
        </h4>
      )}
    </Sheet>
  );
};

export default AddressList;
