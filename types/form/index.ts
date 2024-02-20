import { FieldValues, UseFormHandleSubmit, UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form";
import * as yup from "yup"

export type setValueType<T extends FieldValues> = UseFormSetValue<T> ;
export type registerType<T extends FieldValues> = UseFormRegister<T> ;
export type submitType<T extends FieldValues> = UseFormHandleSubmit<T> ;
export type watchType<T extends FieldValues> = UseFormWatch<T> ;
export type resolverType<T extends yup.ISchema<any, any, any, any>> = yup.InferType<T>