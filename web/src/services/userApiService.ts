import { AxiosResponse } from "axios";
import { api } from "./apiService";

interface UserForFindOne {
    username : string,
    password : string,
}

interface UserForFindOneResponseDto {
    data: UserForFindOne;
}

const getAccount = async (username: string): Promise<UserForFindOneResponseDto> => {
    const response: AxiosResponse<UserForFindOneResponseDto> = 
    await api.get<UserForFindOneResponseDto>(`/users/${username}`);

    return response.data;
}
export const userApi = {
    getAccount,
}