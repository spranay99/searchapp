import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key : 'AIzaSyD3nfv25qpi4dPKybv8ZOleNRh0BUg1ycs',
    cx : 'c1d77daf0f57f4d11',
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
