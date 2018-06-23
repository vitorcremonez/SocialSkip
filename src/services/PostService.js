import axios from 'axios';
import {
    API_ROOT_URL,
    authHttpOptions,
} from "../constants/API";

export const PostService = {
    fetchPost(id, callback = null, callbackError = null) {
        return axios
            .get(`${API_ROOT_URL}/posts/${id}`, authHttpOptions())
            .then((response) => {
                if (callback) callback(response);
                return response.data.data;
            })
            .catch(function (error) {
                if (callbackError) callbackError(error);
                console.log("Fetch Post ERROR: ", error);
            });
    },

    fetchPosts(data, command, callback = null, callbackError = null) {
        return axios
            .get(`${API_ROOT_URL}/${data.object_model.toLowerCase()}/${data.object_id}/posts${command}`, authHttpOptions())
            .then((response) => {
                callback(response);
                return response.data.data;
            }).catch((error) => {
                callbackError(error);
                console.log('fetchPosts', error);
                //basicErrorHandling(error);
            });
    },

    createPost(data, callback = null) {
        return axios
            .post(`${API_ROOT_URL}/posts`, data, authHttpOptions())
            .then((response) => {
                callback(response.data.data.id);
                return response.data.data;
            })
            .catch((error) => {
                console.log("createPost ERROR:", error.response);
            });
    },
};
