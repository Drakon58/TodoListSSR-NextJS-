import axios from 'axios'

const TodoBaseURL = "http://localhost:4000/todos";
const TodoAdd = "/add";
const TodoUpdate = "/update";
const TodoRemove = "/remove";

export const Todo = {
    GetTodo: async () => {
        console.log(`Calling API at: ${TodoBaseURL}`);
        return await axios.get(`${TodoBaseURL}`)
            .catch((error) => {
                console.error(error);
            }).then(resJson => {
                if (resJson != null) {
                    console.log(resJson.data);
                    return resJson.data;
                } else {
                    console.error("DB API SERVER NOT RUNNING");
                    return {};
                }
            });
    },

    GetTodoById: async (id) => {
        console.log(`Calling API at: ${TodoBaseURL}/${id}`);
        return await axios.get(`${TodoBaseURL}/${id}`)
            .catch((error) => {
                console.error(error);
            }).then(resJson => {
                if (resJson != null) {
                    console.log(resJson.data);
                    return resJson.data;
                } else {
                    console.error("DB API SERVER NOT RUNNING");
                    return {};
                }
            });
    },

    CreateTodo: (todoDetails) => {
        return axios.post(`${TodoBaseURL}${TodoAdd}`, todoDetails)
            .catch((error) => {
                console.error(error);
                return false;
            })
            .then(res => {
                console.log(res.data)
                return true;
            });
    },

    EditTodo: (todoDetails) => {
        return axios.post(`${TodoBaseURL}${TodoUpdate}/${todoDetails.id}`, todoDetails)
            .catch((error) => {
                console.error(error);
                return false;
            })
            .then(res => {
                console.log(res.data)
                return true;
            });
    },

    RemoveTodo: (id) => {
        axios.post(`${TodoBaseURL}${TodoRemove}/${id}`)
            .catch((error) => {
                console.error(error);
            }).then(resJson => {
                console.log(resJson)
            });
    }
}