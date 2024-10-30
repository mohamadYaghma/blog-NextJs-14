import http from "./httpServices";

export async function createCommentApi(data , option) {
    return http.post("/comment/add" , data , option).then(({data})=>data.data);
}
export async function getAllCommentApi(option = {}) {
    return http.get("/comment/list" , option).then(({data})=>data.data);
}
