export const API_ROOT_URL = "https://api.meetu.com.br";//process.env.REACT_APP_BASE_URL;

export const DEFAULT_HTTP_OPTIONS = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
};

export const authHttpOptions = () => {
    //if (AuthStore.getToken()) {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUzMDIyMTE0MH0.702f9CfP5Vm18G7ELvGK9izEZb2lJz2XlGuXorr6AdA";//+ AuthStore.getToken();
    return {
        headers: {
            "Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTUzMDIyMTE0MH0.702f9CfP5Vm18G7ELvGK9izEZb2lJz2XlGuXorr6AdA",
            ...DEFAULT_HTTP_OPTIONS.headers,
        }
    };
    //}
};