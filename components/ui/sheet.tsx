import { cn } from "@/utils/cn";
import Overlay from "./overLay";
import CloseIcon from "./icons/close";
import Button from "../fields/button";
import { sheetType, voidFuncType } from "@/types";

interface SheetProps {
  children: React.ReactNode;
  position: sheetType;
  onClose:  voidFuncType;
  headerTitle: string;
  btntitle: string;
  btnAction:voidFuncType;
}

const Sheet: React.FC<SheetProps> = ({
  children,
  position,
  onClose,
  headerTitle,
  btntitle,
  btnAction
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
        <div
          className="
        flex
        flex-col
        justify-between
        overflow-y-auto
        h-full
        "
        >
          {/* header */}
          <div>

          <div className="flex items-center justify-between pt-6 pb-3 px-5">
            <h3 className=" font-DanaBold text-lg">{headerTitle}</h3>
            <div onClick={onClose} className="w-6 h-6 text-zinc ">
              <CloseIcon />
            </div>
          </div>
          
          <hr />
          </div>


          {/* content */}
          <div className="px-5 overflow-y-auto flex-1 ">{children}</div>
          {/* footer */}
          <div className="p-5 shadow-sm self-end w-full ">
            <Button onClick={btnAction} fullWidth>{btntitle}</Button>
          </div>
        </div>
      </div>
      <Overlay onClose={onClose} />
    </>
  );
};

export default Sheet;
