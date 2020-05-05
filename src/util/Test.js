import axios from 'axios';

export const Test = {
    GetTVAmaze: () => {
        return axios.get('https://api.tvmaze.com/search/shows?q=batman')
        .catch((error) => {
            console.error(error);
        }).then(resJson => {
            // console.log(resJson.data);
            return resJson.data;
        });
    }
}