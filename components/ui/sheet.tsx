import { cn } from "@/utils/cn";
import Overlay from "./overLay";

interface SheetProps{
  children: React.ReactNode;
  position : "bottom" | "top" | "left" | "right";
  onClose : (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}


const Sheet : React.FC<SheetProps> = ({children , position , onClose}) => {
  return (
    <>
    <div
    className={
      cn(
        `
        bg-red-600
        absolute
        h-3/4
        z-20
        `,
        position == "bottom" && "bottom-0 right-0 left-0"
      )
    }
    >
      {children}
    </div>
    <Overlay onClose={onClose} />
    </>
  )
}

export default Sheet
