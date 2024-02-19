import { apiSlice } from "./features/services/api";

const rootMiddleWare = [apiSlice.middleware];

export default rootMiddleWare;