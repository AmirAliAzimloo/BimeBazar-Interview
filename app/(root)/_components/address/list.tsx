import Sheet from "@/components/ui/sheet"

interface AddressListProps{
  onClose : (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

}

const AddressList : React.FC< AddressListProps > = ({onClose}) => {
  return (
    <Sheet
    position="bottom"
    onClose={onClose}
    >
      <div>
        test
      </div>
    </Sheet>
  )
}

export default AddressList
