import { fetchUser } from "../utils/fatchLocalStorageData";

const userInfo = fetchUser();



export const initialState = {
    user: userInfo,
};