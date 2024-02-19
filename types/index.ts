export interface AddressInterface {
  id: number;
  name: string;
  details: string;
  checked?: boolean;
}

export type rtkErrors = { status: number; data: { errors: string[] } };
