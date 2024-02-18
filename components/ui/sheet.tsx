import { cn } from "@/utils/cn";
import Overlay from "./overLay";
import CloseIcon from "./icons/close";
import Button from "../fields/button";

interface SheetProps {
  children: React.ReactNode;
  position: "bottom" | "top" | "left" | "right";
  onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  headerTitle: string;
  btntitle: string;
}

const Sheet: React.FC<SheetProps> = ({
  children,
  position,
  onClose,
  headerTitle,
  btntitle,
}) => {
  return (
    <>
      <div
        className={cn(
          `
        bg-white
        fixed
        h-3/4
        z-20
        transition-all
        duration-150
        `,
          position == "bottom" && "bottom-0 right-0 left-0"
        )}
      >
        {/* header */}
        <div className="flex items-center justify-between pt-6 pb-3 px-5">
          <h3 className=" font-DanaBold text-lg">{headerTitle}</h3>
          <div onClick={onClose} className="w-6 h-6 text-custm-zinc ">
            <CloseIcon />
          </div>
        </div>

        <hr />

        {/* content */}
        <div className="px-5 overflow-y-auto " >
         
        {children}
        </div>
        {/* footer */}
          <div className="p-5 shadow-sm fixed right-0 left-0 bottom-0 ">
          <Button fullWidth>{btntitle}</Button>
          </div>
      </div>
      <Overlay onClose={onClose} />
    </>
  );
};

export default Sheet;
