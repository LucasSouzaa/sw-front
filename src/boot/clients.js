import axios from 'axios';

const HOST = 'https://swapi.dev/api/people/';

export {
    HOST,
};

const client =  {
    default: {
        client: axios.create({
            baseURL: "https://swapi.dev/api/people/",
            responseType: 'json',
        }),
        options: {
            returnRejectedPromiseOnError: true,
            interceptors: {
                request: [
                    ({ getState }, config) => {
                        return {
                            ...config,
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                        };
                    },
                ],
                response: [
                    {
                        success: (store, response) => response,
                        error: (store, error) => {
                            return Promise.reject(error);
                        },
                    },
                ],
            },
        },
    },
};

export default client;
