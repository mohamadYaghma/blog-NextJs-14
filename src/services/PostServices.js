import { data } from "autoprefixer"
import http from "./httpServices"

export async function getPostBySlug(slug){
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
    )
    const {data} = await res.json()
    const {post} = data || {} 
    return post
}

export async function getPosts(queries, options) {
    try {
        const url = `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`;
        console.log('Fetching posts from:', url); // خطایابی URL
        console.log('With options:', options); // خطایابی options

        const res = await fetch(url, options);

        if (!res.ok) {
            console.error('Failed to fetch posts:', res.status, res.statusText);
            throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

        const { data } = await res.json();
        const { posts } = data || {};

        console.log('Posts fetched:', posts); // خطایابی داده‌ها

        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}


export async function likePostApi(postId){
    return http.post(`/post/like/${postId}`).then(({data})=>data.data)
}

export async function bookmarkPostApi(postId){
    return http.post(`/post/bookmark/${postId}`).then(({data})=>data.data)
}