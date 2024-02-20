export interface AddressInterface {
  id: number;
  name: string;
  details: string;
  checked?: boolean;
}

//* sheet
export type sheetType = "bottom" | "top" | "left" | "right" ;

//* utils
export type voidFuncType = ()=>void;