import Sheet from "@/components/ui/sheet";
import Wrapper from "@/components/ui/wrapper";

interface AddressListProps {
  onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const AddressList: React.FC<AddressListProps> = ({ onClose }) => {
  return (
    <Sheet
      position="bottom"
      onClose={onClose}
      headerTitle="انتخاب آدرس"
      btntitle="انتخاب"
    >
      <div className="w-full h-[110px]">sdsd</div>
      <div className="w-full h-[110px]">sdsd</div>
      <div className="w-full h-[110px]">sdsd</div>
      <div className="w-full h-[110px]">sdsd</div>
      <div className="w-full h-[110px]">sdsd</div>
      <div className="w-full h-[110px] ">sdsd</div>
    </Sheet>
  );
};

export default AddressList;
