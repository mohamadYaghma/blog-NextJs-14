import http from "./httpServices";

export async function createCommentApi(data , option) {
    return http.post("/comment/add" , data , option).then(({data})=>data.data);
}

