"use client"


interface OverlayProps{
    onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}


const Overlay: React.FC<OverlayProps> = ({onClose}) => {
    return ( 
        <div
        onClick={onClose}
        className="fixed inset-0 bg-zinc-700/50 w-full transition-all z-10 "
      ></div>
     );
}
 
export default Overlay;